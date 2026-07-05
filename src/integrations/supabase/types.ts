export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      contact_requests: {
        Row: {
          id: string;
          name: string;
          email: string;
          project_description: string;
          budget_range: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          project_description: string;
          budget_range: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          project_description?: string;
          budget_range?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          situation: string;
          solution: string;
          result: string;
          metrics: Json;
          image_url: string | null;
          published: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          category: string;
          summary: string;
          situation: string;
          solution: string;
          result: string;
          metrics?: Json;
          image_url?: string | null;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          category?: string;
          summary?: string;
          situation?: string;
          solution?: string;
          result?: string;
          metrics?: Json;
          image_url?: string | null;
          published?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          id: string;
          project_id: string | null;
          quote: string;
          author_name: string;
          author_company: string;
          published: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          project_id?: string | null;
          quote: string;
          author_name: string;
          author_company: string;
          published?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string | null;
          quote?: string;
          author_name?: string;
          author_company?: string;
          published?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
