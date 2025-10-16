CREATE TABLE `form_submissions` (
	`id` varchar(64) NOT NULL,
	`type` enum('diagnostico','contato') NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`company` varchar(255),
	`employees` varchar(50),
	`message` text,
	`challenge` text,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `form_submissions_id` PRIMARY KEY(`id`)
);
