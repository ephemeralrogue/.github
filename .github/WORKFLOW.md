# workflow
this is extended from [CONTRIBUTING.md](https://github.com/ephemeralrogue/gauntlet/blob/main/.github/CONTRIBUTING.md).
Please read that document before perusing this one, as it provides a general
overview of the workflow and additional guidelines.

this workflow is a loose adaptation of a [Trunk-Based Development][trunkdev] workflow.
this emphasizes forks and individual or small team contributions from forks.

# git branches

there is one major branch:

1. main

-   this branch is protected
-   GitHub Actions run on pull request submissions
-   pull request approvals are required before they are merged
-   this contains production ready code
-   this is code that users are using
-   possible impact to users' apps if something goes wrong
-   new commit triggers auto deployment where applicable

there are a number of naming conventions for development branches you'll work
on in your fork:

1. [username]/feature/[feature-name]

-   new feature based on issue or request
-   this branch is created from your fork's `main` branch
-   this can be deleted

4. [username]/patch/[feature]

-   used to patch new features that are almost ready for submission or
    whose submission has been closed due to a number of fixes that need
    to be implemented

5. hotfix/x.x.x

-   ideally, this will be used sparingly
-   in case a bug is found in production, this is to prioritize review
-   very small changes should be made in these branches, specifically to
    address bugs in production and nothing else
-   should be merged quickly upon approval

## contributor workflow

### fork repository

### create feature branch from main

### create PR from my-username/feature/my-new-feature -> main

-   PR is reviewed,
-   review confirms it works, follows contribution conventions, looks good
-   developer test PR in local computer, their discord server
-   CI/CD will validate that all test cases are good
-   PR reviewers test cases are created
-   CI/CD will validate tests and verify code adheres to guidelines
-   deploy to test linux/ubuntu server
-   deploy to shared test guild
-   CI/CD integration validation

### PR merged to main

-   production release
-   have a call with devs to ensure everything runs smoothly

and remember to Document, Document, Document!

<!--link dump-->
[trunkdev]: https://trunkbaseddevelopment.com