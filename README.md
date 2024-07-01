# MakerKit - SaaS Starter for Next.js and Supabase

MakerKit is a SaaS starter project built with Next.js, Supabase and Tailwind CSS.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is a quick guide to get you started with the project. For more details, 
please refer to the [documentation](https://makerkit.dev/docs/next-supabase/introduction).

### Before you deploy to production

Many users try to deploy to production without going through the steps below.
The result is the application won't be working as expected.

**Important**: deploying to production (Vercel or other) will require you to 
fill the required environment variables. 

[Please refer to the documentation](https://makerkit.dev/docs/next-supabase/going-to-production-overview) to 
learn more.

**Failure to do so will result in your application not working as expected 
or not deploying at all**. Please ensure you have the required environment 
variables and keys before deploying to production.

### Requirements

Ensure you have the following installed:

- Node.js (LTS recommended)
- Git
- Docker

### Cloning the Repository

Clone this repository and name it according to your preferences (in the example below, we use `your-saas`):

```
git clone https://github.com/makerkit/stepho.git your-saas
```

Move to the folder just cloned:

```
cd your-saas
```

Set this repository as your upstream fork, so you can
pull updates when needed:

```
git remote add upstream https://github.com/makerkit/stepho
```

We recommend to watch to the repository, so you know when there's an update.
To pull the latest updates, use:

```
git pull upstream main
```

In case we change the same files, you will need to resolve the conflicts.

Alternatively, you can cherry-pick changes so to reduce the amount of
conflicts across the files.

### Installing the Node Modules

Install the Node modules with the following command:

```
npm i
```

### Supabase

First, run the Supabase stack:

```bash
npm run supabase:start
```

**NB**: this does not run your remote Supabase project, but a local instance
using Docker. This is useful for development and testing.

For production, you will need to copy your remote instance keys, and push 
the database migrations to your remote instance.

**Recommendation**: use the local instance for development, and the
production instance **when you're ready to deploy**. Please set up the local
instance first before attempting to use the production instance, so that you 
can test your application locally and familiarise with the product.

If you are planning to deploy Supabase to production right away, [please ensure you read this guide by Supabase first](https://supabase.com/docs/guides/cli/local-development#link-your-project).

#### Adding the Supabase Keys to the Environment Variables

We add the default Supabase keys to the environment variables, so we can run 
Supabase locally right away.

When running the command, we will see a message like this:

```bash
> supabase start

Applying migration 20221215192558_schema.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
    Inbucket URL: http://localhost:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: ****************************************************
service_role key: ****************************************************
```

Only if the values above are different than the ones already setup in `.env.
development` and `.env.test`, we need to copy the `anon key` and 
`service_role key` values and add them to the `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_ANON_KEY=****************************************************
SUPABASE_SERVICE_ROLE_KEY=****************************************************
```

#### Database types (optional)

We provide the default database types for TypeScript. If you want to 
generate new types, you can do so with the following command:

```
npm run typegen
```

This is useful when you add/update new tables or columns to your database, 
so that the Supabase client can provide you with the correct types.

### Next.js Server

Then, run the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Use any of the above commands to start the Next.js server.

### After Creating your Supabase Project

Make sure to add the environment variables to the provider you're deploying.

### Running Tests

To customize the testing environment, add the required environment variables to 
your `.env.test` file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
