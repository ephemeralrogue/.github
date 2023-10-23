# contributing

## workflow

1. fork and clone this repository.
2. create a new branch in your fork based off the **main** branch.
3. make your changes.
4. commit your changes, and push them.
5. submit a pull request!

for details regarding this workflow, see [WORKFLOW.md][workflow].

## contributing to the code

**the issue tracker is only for issue reporting. for proposals/suggestions,
please begin a new discussion using the suggestions form in the suggestions
category. If you have a question, you can find us in our
[Discord Server][discord server]**.

to contribute to this repository, begin by creating a new fork of the
repository and submit a pull request. [ESLint] is highly recommended; install
it in your text editor or IDE and routinely run the linting script to ensure your
code will pass any GitHub Actions that are set to run when you submit a pull request.

### nonsensetwice project concepts guidelines

there are a number of guidelines considered when reviewing pull requests.
guidelines are fairly generalized; as such, these are not hard and fast rules,
but rather ideas by which to write and operate by:

- each project is a specific concept and works to either fill a void in the
  development/language ecosystem or serves to explore a particular idea. if
  you have an idea that is related to a project and unsure if it fits,
  let's have a chat about it. new projects can be given lift at any time.  

- with regard to any discord-bot related development, everything should be
  shard compliant. if code you write and submit would break when sharding,
  break other things from supporting sharding, or is incompatible with
  sharding, then you will need to think of a way to make it work with
  sharding before your submission/pull request will be accepted and merged.
- **most** projects will follow [OOP paradigms][oop paradigms] and generally
  rely on behaviour over state where possible. This generally helps methods
  be predictable, keeps the codebase simple and understandable, reduces code
  duplication through abstraction, and leads to efficiency and therefore
  scalability.
- projects that are written in JS/TypeScript are written as [ES Modules][esm]. the
  package.json will include a `type` field set to `modules`. code submissions
  should follow ESM syntax whether they're written in JavaScript or TypeScript.
- everything should follow our ESLint rules as closely as possible, and should
  pass lint tests even if you must disable a rule for a single line.

if you question whether or not your code or ideas adhere to these guidelines,
please find us in the [Discord Server][discord server] and ask away!

these guidelines have been modified from the contributing guidelines in use
by the [Sapphire.js][sapphire] team.

<!-- Link Dump -->

[discord server]: https://discord.gg/M8Aqgr3ftC
[eslint]: https://eslint.org/
[node.js]: https://nodejs.org/en/download/
[yarn]: https://yarnpkg.com/getting-started/install
[oop paradigms]: https://www.educative.io/blog/object-oriented-programming
[esm]: https://nodejs.org/api/esm.html
[sapphire]: https://github.com/sapphiredev/.github/blob/main/.github/CONTRIBUTING.md
[workflow]: https://github.com/nonsensetwice/.github/blob/main/.github/WORKFLOW.md