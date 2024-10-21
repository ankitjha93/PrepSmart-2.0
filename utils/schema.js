 
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
   id: serial('id').primaryKey(),
   jsonMockResp: text('jsonMockResp').notNull(),
   jobPosition: varchar('jobPosition', { length: 255 }).notNull(),
   jobDescription: varchar('jobDescription', { length: 255 }).notNull(),
   jobExperience: varchar('jobExperience', { length: 255 }).notNull(),
   createdBy: varchar('createdBy', { length: 255 }).notNull(),
   createdAt: varchar('createdAt', { length: 255 }).notNull(),
   mockID: varchar('mockID', { length: 255 }).notNull()
});
