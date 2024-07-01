import type { SupabaseClient } from '@supabase/supabase-js';
import { USERS_TABLE } from '~/lib/db-tables';

/**
 * @name getUserById
 * @param client
 * @param userId
 */
export function getUserById(client: SupabaseClient, userId: string) {
  return client.from(USERS_TABLE).select('*').eq('id', userId).maybeSingle();
}
