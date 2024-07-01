import Trans from '~/core/ui/Trans';

import Heading from '~/core/ui/Heading';
import { withI18n } from '~/i18n/with-i18n';

import SignInMethodsContainer from '~/app/(auth)/components/SignInMethodsContainer';

export const metadata = {
  title: 'Sign In',
};

function SignInPage() {
  return (
    <>
      <div>
        <Heading type={5}>
          <Trans i18nKey={'auth:signInHeading'} />
        </Heading>
      </div>

      <SignInMethodsContainer />
    </>
  );
}

export default withI18n(SignInPage);
