### Remote-Explorer Extension Steps to Release

1. Checkout to main
2. Pull and make sure you have the latest updates to repo locally
3. Check previous version number and now get this release’s version (the next even number)
4. Checkout to new branch for release `release-[build_num]`
5. change the version number on the extension in `package.json` to the next even number
6. run `npm i` to update packaging (you should now see a change in `package-lock.json`)
7. Stage changes, commit changes, and now publish upstream using the source control UI
8. **Add tag with format `remote-explorer.*`**
9. push changes WITH tag by doing `git push --tags`
10. Create a PR from the release branch and get the PR approved and merged
11. head to [azure pipelines](https://dev.azure.com/monacotools/Monaco/_build?definitionId=402&_a=summary)
12. follow the steps on the pipeline for approvals and publishing
