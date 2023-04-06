# Typescript node template
Typescript template for backend packages/apps. It provides a working set of
packages/resources ready to be used. Just put your code under `src` and you'll
be ready to go.

## Packages
- [Typescript](https://www.typescriptlang.org/)
- [TSConfig Paths](https://github.com/dividab/tsconfig-paths) (transform `import x from '@/sample'; @/ => src/`)
- [Node 19+](https://nodejs.org/dist/latest-v19.x/docs/api/)
- [NPM 7+](https://nodejs.org/dist/latest-v19.x/docs/api/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://typescript-eslint.io) (typescript)
- [Prettier](https://prettier.io/) (on eslint)
- [Jest](https://jestjs.io/docs/getting-started) (with ts-jest)
- [Editorconfig](https://editorconfig.org/)
- [Husky hooks](https://typicode.github.io/husky/#/)
- [Semantic-release](https://semantic-release.gitbook.io/semantic-release/) (automatically publishes this repo on NPM)

## Git hooks
This repo comes with 3 git hooks handled by [Husky hooks](https://typicode.github.io/husky/#/):
1. `commit-msg` which checks if commit messages are under [conventional commit format](https://commitlint.js.org/#/concepts-commit-conventions)
2. `pre-commit` which runs `npm run lint:check` to validate code formatting before actual committing
3. `pre-push` which runs `npm run test` before pushing code

## Conventional commit messages
This repo uses [commitlint](https://commitlint.js.org/#/) to validate and standardize commit
messages. This is also necessary for the release/publish step, which looks for this kind of message
format to detect the correct version changes. Make sure you use it on your work, or let the
`commit-msg` hook validate it for you. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is a good complementary read also.

All you have to do is commit like those below examples:
```ts
// see formats on https://commitlint.js.org/#/concepts-commit-conventions
$ git commit -m 'feat: this change is related to a feature'
$ git commit -m 'refactor: adjust something'
$ git commit -m 'docs: change on README.md'
$ git commit -m 'chore: update CI'
```

## Automatic releases and publishing as NPM package
This repo has all things necessary to be published as a public package on
[NPM](https://www.npmjs.com/). All you need to do is to:
1. Create a NPM access token (https://docs.npmjs.com/creating-and-viewing-access-tokens)
2. Create a repository secret called `NPM_TOKEN` with the value above
3. Create a Github personal access token (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)
4. Create a repository secret called `GH_TOKEN` with the value above
5. That's it! Now every time a push/merge is made on branch `main` a release pipeline will run,
   building the application, generating a new tag to the repo, bumping `package.json` version on
   branch `main` according to the last commit change (check the `.releaserc.js`) and publishing this
   to NPM, according to the config set on `package.json` `publishConfig`.
