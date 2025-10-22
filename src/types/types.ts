export type AppState = {
  top: number;
  language: string;
  createdFrom: string;
  theme: 'light' | 'dark';
  setTop: (top: number) => void;
  setLanguage: (lang: string) => void;
  setCreatedFrom: (cForm: string) => void;
  toggleTheme: () => void;
};

export interface Repo {
  id: number;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  created_at: string;
}
