/**
 * HubSpot Integration Helper
 * Handles contact and deal creation in HubSpot CRM
 */

const HUBSPOT_API_URL = 'https://api.hubapi.com';
const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

interface HubSpotContact {
  email: string;
  firstname: string;
  lastname?: string;
  phone?: string;
  company?: string;
  website?: string;
}

interface HubSpotDeal {
  dealname: string;
  amount?: string;
  dealstage?: string;
  pipeline?: string;
}

/**
 * Create a contact in HubSpot
 */
export async function createHubSpotContact(contact: HubSpotContact): Promise<string> {
  if (!ACCESS_TOKEN) {
    throw new Error('HUBSPOT_ACCESS_TOKEN not configured');
  }

  const response = await fetch(`${HUBSPOT_API_URL}/crm/v3/objects/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: contact,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`HubSpot API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.id;
}

/**
 * Create a deal in HubSpot
 */
export async function createHubSpotDeal(deal: HubSpotDeal, contactId?: string): Promise<string> {
  if (!ACCESS_TOKEN) {
    throw new Error('HUBSPOT_ACCESS_TOKEN not configured');
  }

  const response = await fetch(`${HUBSPOT_API_URL}/crm/v3/objects/deals`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: deal,
      associations: contactId ? [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: 'HUBSPOT_DEFINED',
              associationTypeId: 3, // Deal to Contact association
            },
          ],
        },
      ] : undefined,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`HubSpot API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  return data.id;
}

/**
 * Search for existing contact by email
 */
export async function searchHubSpotContact(email: string): Promise<string | null> {
  if (!ACCESS_TOKEN) {
    throw new Error('HUBSPOT_ACCESS_TOKEN not configured');
  }

  const response = await fetch(`${HUBSPOT_API_URL}/crm/v3/objects/contacts/search`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: 'email',
              operator: 'EQ',
              value: email,
            },
          ],
        },
      ],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.results?.[0]?.id || null;
}

