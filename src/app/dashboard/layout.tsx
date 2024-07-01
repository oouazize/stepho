import { permanentRedirect } from 'next/navigation';

import requireSession from '~/lib/user/require-session';
import initializeServerI18n from '~/i18n/i18n.server';
import getLanguageCookie from '~/i18n/get-language-cookie';

import I18nProvider from '~/i18n/I18nProvider';
import { getUserById } from '~/lib/user/database/queries';
import getSupabaseServerComponentClient from '~/core/supabase/server-component-client';

import SiteHeader from '~/components/SiteHeader';
import SideBar from '~/components/sideBar';

async function layout({ children }: { children: React.ReactNode }) {
  const client = getSupabaseServerComponentClient();
  const session = await requireSession(client);
  const userId = session.user.id;

  const { data: user } = await getUserById(client, userId);

  if (!user) {
    permanentRedirect('/login');
  }

  const i18n = await initializeServerI18n(getLanguageCookie());

  return (
    <I18nProvider lang={i18n.language}>
      <div className="flex min-h-screen w-full">
        <SideBar />
        <div className="flex flex-1 flex-col">
          <SiteHeader />
          {children}
        </div>
      </div>
    </I18nProvider>
  );
}

export default layout;
