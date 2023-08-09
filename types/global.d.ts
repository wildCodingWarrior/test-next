type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

declare interface Post {
  content: string;
  created_at: string;
  id: number;
  is_public: boolean;
  title: string;
}

// declare interface Database {
//   public: {
//     Tables: {
//       countries: {
//         Row: {
//           date: string;
//           description: string | null;
//           id: number;
//           key: number | null;
//           name: string;
//         };
//         Insert: {
//           date?: string;
//           description?: string | null;
//           id?: number;
//           key?: number | null;
//           name: string;
//         };
//         Update: {
//           date?: string;
//           description?: string | null;
//           id?: number;
//           key?: number | null;
//           name?: string;
//         };
//         Relationships: [];
//       };
//       posts: {
//         Row: {
//           content: string;
//           created_at: string;
//           id: number;
//           is_public: boolean;
//           title: string;
//         };
//         Insert: {
//           content: string;
//           created_at?: string;
//           id?: number;
//           is_public?: boolean;
//           title: string;
//         };
//         Update: {
//           content?: string;
//           created_at?: string;
//           id?: number;
//           is_public?: boolean;
//           title?: string;
//         };
//         Relationships: [];
//       };
//     };
//     Views: {
//       [_ in never]: never;
//     };
//     Functions: {
//       [_ in never]: never;
//     };
//     Enums: {
//       [_ in never]: never;
//     };
//     CompositeTypes: {
//       [_ in never]: never;
//     };
//   };
// }
