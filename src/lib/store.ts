import fs from "fs";
import path from "path";
import { Article, Issue, Editor, Submission, Member, SiteSettings } from "./types";
import { 
  initialArticles, 
  initialIssues, 
  initialEditors, 
  initialSubmissions, 
  initialMembers, 
  initialSiteSettings 
} from "./initialData";

export interface DatabaseSchema {
  articles: Article[];
  issues: Issue[];
  editors: Editor[];
  submissions: Submission[];
  members: Member[];
  settings: SiteSettings;
}

const DB_PATH = path.join(process.cwd(), "src", "data", "db.json");

function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

export function getDatabase(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading database file, resetting to initial:", error);
  }

  // Fallback to initial data
  const initialDb: DatabaseSchema = {
    articles: initialArticles,
    issues: initialIssues,
    editors: initialEditors,
    submissions: initialSubmissions,
    members: initialMembers,
    settings: initialSiteSettings,
  };

  try {
    ensureDirectoryExistence(DB_PATH);
    fs.writeFileSync(DB_PATH, JSON.stringify(initialDb, null, 2), "utf-8");
  } catch (err) {
    console.error("Could not write initial db.json:", err);
  }

  return initialDb;
}

export function saveDatabase(db: DatabaseSchema): boolean {
  try {
    ensureDirectoryExistence(DB_PATH);
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to persist database:", err);
    return false;
  }
}
