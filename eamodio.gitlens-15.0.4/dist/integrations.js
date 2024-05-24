exports.id=758,exports.ids=[758],exports.modules={3202:(e,t,r)=>{r.r(t),r.d(t,{AzureDevOpsAuthenticationProvider:()=>AzureDevOpsAuthenticationProvider});var i=r(1398),o=r(3166),n=r(2471);let AzureDevOpsAuthenticationProvider=class AzureDevOpsAuthenticationProvider{getSessionId(e){return e?.domain??""}async createSession(e){let t,r=e?.organization;if(!r){let t=i.window.createInputBox();t.ignoreFocusOut=!0;let o=[];try{r=await new Promise(r=>{o.push(t.onDidHide(()=>r(void 0)),t.onDidChangeValue(()=>t.validationMessage=void 0),t.onDidAccept(()=>{let e=t.value.trim();if(!e){t.validationMessage="An organization is required";return}r(e)})),t.title=`Azure DevOps Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,t.placeholder="Organization",t.prompt="Enter your Azure DevOps organization",t.show()})}finally{t.dispose(),o.forEach(e=>void e.dispose())}}if(!r)return;let s=i.window.createInputBox();s.ignoreFocusOut=!0;let a=[];try{let o={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Azure DevOps Access Tokens Page"};t=await new Promise(t=>{a.push(s.onDidHide(()=>t(void 0)),s.onDidChangeValue(()=>s.validationMessage=void 0),s.onDidAccept(()=>{let e=s.value.trim();if(!e){s.validationMessage="A personal access token is required";return}t(e)}),s.onDidTriggerButton(t=>{t===o&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"dev.azure.com"}/${r}/_usersSettings/tokens`))})),s.password=!0,s.title=`Azure DevOps Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,s.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,s.prompt=(0,n.Av)("input-prompt-links")?`Paste your [Azure DevOps Personal Access Token](https://${e?.domain??"dev.azure.com"}/${r}/_usersSettings/tokens "Get your Azure DevOps Access Token")`:"Paste your Azure DevOps Personal Access Token",s.buttons=[o],s.show()})}finally{s.dispose(),a.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:(0,o.K3)(`:${t}`),scopes:e?.scopes??[],account:{id:"",label:""}}}}},5317:(e,t,r)=>{r.r(t),r.d(t,{BitbucketAuthenticationProvider:()=>BitbucketAuthenticationProvider});var i=r(1398),o=r(3166),n=r(2471);let BitbucketAuthenticationProvider=class BitbucketAuthenticationProvider{getSessionId(e){return e?.domain??""}async createSession(e){let t,r=e?.username;if(!r){let t={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Bitbucket Settings Page"},o=i.window.createInputBox();o.ignoreFocusOut=!0;let s=[];try{r=await new Promise(r=>{s.push(o.onDidHide(()=>r(void 0)),o.onDidChangeValue(()=>o.validationMessage=void 0),o.onDidAccept(()=>{let e=o.value.trim();if(!e){o.validationMessage="A Bitbucket username is required";return}r(e)}),o.onDidTriggerButton(r=>{r===t&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"bitbucket.org"}/account/settings/`))})),o.title=`Bitbucket Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,o.placeholder="Username",o.prompt=(0,n.Av)("input-prompt-links")?`Enter your [Bitbucket Username](https://${e?.domain??"bitbucket.org"}/account/settings/ "Get your Bitbucket App Password")`:"Enter your Bitbucket Username",o.show()})}finally{o.dispose(),s.forEach(e=>void e.dispose())}}if(!r)return;let s=i.window.createInputBox();s.ignoreFocusOut=!0;let a=[];try{let r={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the Bitbucket App Passwords Page"};t=await new Promise(t=>{a.push(s.onDidHide(()=>t(void 0)),s.onDidChangeValue(()=>s.validationMessage=void 0),s.onDidAccept(()=>{let e=s.value.trim();if(!e){s.validationMessage="An app password is required";return}t(e)}),s.onDidTriggerButton(t=>{t===r&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"bitbucket.org"}/account/settings/app-passwords/`))})),s.password=!0,s.title=`Bitbucket Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,s.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,s.prompt=(0,n.Av)("input-prompt-links")?`Paste your [Bitbucket App Password](https://${e?.domain??"bitbucket.org"}/account/settings/app-passwords/ "Get your Bitbucket App Password")`:"Paste your Bitbucket App Password",s.buttons=[r],s.show()})}finally{s.dispose(),a.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:(0,o.K3)(`${r}:${t}`),scopes:e?.scopes??[],account:{id:"",label:""}}}}},4500:(e,t,r)=>{r.r(t),r.d(t,{CloudIntegrationService:()=>CloudIntegrationService});var i=r(1398),o=r(3916),n=r(8188);let CloudIntegrationService=class CloudIntegrationService{constructor(e,t){this.container=e,this.connection=t}async getConnections(){let e=await this.connection.fetchGkDevApi("v1/provider-tokens",{method:"GET"},{organizationId:!1});if(!e.ok){let t=(await e.json())?.error;null!=t&&o.Vy.error(`Failed to get connected providers from cloud: ${t}`);return}return(await e.json())?.data}async getConnectionSession(e,t=!1){let r=n.xq[e];if(null==r){o.Vy.error(`Unsupported cloud integration type: ${e}`);return}let i=await this.connection.fetchGkDevApi(`v1/provider-tokens/${r}${t?"/refresh":""}`,{method:t?"POST":"GET"},{organizationId:!1});if(!i.ok){let r=(await i.json())?.error;null!=r&&o.Vy.error(`Failed to ${t?"refresh":"get"} ${e} token from cloud: ${r}`);return}return(await i.json())?.data}async authorize(e){let t=n.xq[e];if(null==t){o.Vy.error(`Unsupported cloud integration type: ${e}`);return}let r=await i.env.asExternalUri(i.Uri.parse(`${i.env.uriScheme}://${this.container.context.extension.id}/${n.Je}?provider=${e}`)),s=await this.connection.fetchGkDevApi(`v1/provider-tokens/${t}/authorize`,{method:"GET"},{query:`source=gitlens&targetURL=${encodeURIComponent(r.toString(!0))}`,organizationId:!1});if(!s.ok){let t=(await s.json())?.error;null!=t&&o.Vy.error(`Failed to authorize with ${e}: ${t}`);return}return(await s.json())?.data}}},3253:(e,t,r)=>{r.r(t),r.d(t,{GitHubEnterpriseAuthenticationProvider:()=>GitHubEnterpriseAuthenticationProvider});var i=r(1398),o=r(2471);let GitHubEnterpriseAuthenticationProvider=class GitHubEnterpriseAuthenticationProvider{getSessionId(e){return e?.domain??""}async createSession(e){let t;let r=i.window.createInputBox();r.ignoreFocusOut=!0;let n=[];try{let s={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the GitHub Access Tokens Page"};t=await new Promise(t=>{n.push(r.onDidHide(()=>t(void 0)),r.onDidChangeValue(()=>r.validationMessage=void 0),r.onDidAccept(()=>{let e=r.value.trim();if(!e){r.validationMessage="A personal access token is required";return}t(e)}),r.onDidTriggerButton(t=>{t===s&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"github.com"}/settings/tokens`))})),r.password=!0,r.title=`GitHub Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,r.placeholder=`Requires a classic token with ${e?.scopes.join(", ")??"all"} scopes`,r.prompt=(0,o.Av)("input-prompt-links")?`Paste your [GitHub Personal Access Token](https://${e?.domain??"github.com"}/settings/tokens "Get your GitHub Access Token")`:"Paste your GitHub Personal Access Token",r.buttons=[s],r.show()})}finally{r.dispose(),n.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:t,scopes:e?.scopes??[],account:{id:"",label:""}}}}},45:(e,t,r)=>{r.r(t),r.d(t,{GitLabAuthenticationProvider:()=>GitLabAuthenticationProvider});var i=r(1398),o=r(2471);let GitLabAuthenticationProvider=class GitLabAuthenticationProvider{getSessionId(e){return e?.domain??""}async createSession(e){let t;let r=i.window.createInputBox();r.ignoreFocusOut=!0;let n=[];try{let s={iconPath:new i.ThemeIcon("link-external"),tooltip:"Open the GitLab Access Tokens Page"};t=await new Promise(t=>{n.push(r.onDidHide(()=>t(void 0)),r.onDidChangeValue(()=>r.validationMessage=void 0),r.onDidAccept(()=>{let e=r.value.trim();if(!e){r.validationMessage="A personal access token is required";return}t(e)}),r.onDidTriggerButton(t=>{t===s&&i.env.openExternal(i.Uri.parse(`https://${e?.domain??"gitlab.com"}/-/profile/personal_access_tokens`))})),r.password=!0,r.title=`GitLab Authentication${e?.domain?`  \u2022 ${e.domain}`:""}`,r.placeholder=`Requires ${e?.scopes.join(", ")??"all"} scopes`,r.prompt=(0,o.Av)("input-prompt-links")?`Paste your [GitLab Personal Access Token](https://${e?.domain??"gitlab.com"}/-/profile/personal_access_tokens "Get your GitLab Access Token")`:"Paste your GitLab Personal Access Token",r.buttons=[s],r.show()})}finally{r.dispose(),n.forEach(e=>void e.dispose())}if(t)return{id:this.getSessionId(e),accessToken:t,scopes:e?.scopes??[],account:{id:"",label:""}}}}},5122:(e,t,r)=>{r.r(t),r.d(t,{JiraAuthenticationProvider:()=>JiraAuthenticationProvider});var i=r(1398),o=r(4022),n=r(2471),s=r(1298);let JiraAuthenticationProvider=class JiraAuthenticationProvider{constructor(e){this.container=e}authProviderId=s.tp.Jira;getSessionId(e){return e?.domain??""}async createSession(e,t){let r=await this.container.cloudIntegrations;if(null==r)return;let s=await r.getConnectionSession(this.authProviderId);if(null!=s&&s.expiresIn<60&&(s=await r.getConnectionSession(this.authProviderId,!0)),!s&&t?.authorizeIfNeeded){let e=(await r.authorize(this.authProviderId))?.url;if(!e)return;await (0,n.CZ)(e);let t=new i.CancellationTokenSource,a=(0,o.I7)(this.container.uri.onDidReceiveCloudIntegrationAuthenticationUri,this.getUriHandlerDeferredExecutor());try{await Promise.race([a.promise,this.openCompletionInput(t.token),new Promise((e,r)=>t.token.onCancellationRequested(()=>r("Cancelled"))),new Promise((e,t)=>setTimeout(t,12e4,"Cancelled"))]),s=await r.getConnectionSession(this.authProviderId)}catch{s=void 0}finally{t.cancel(),t.dispose(),a.cancel()}}if(s)return{id:this.getSessionId(e),accessToken:s.accessToken,scopes:e?.scopes??[],account:{id:"",label:""},expiresAt:new Date(1e3*s.expiresIn+Date.now())}}async openCompletionInput(e){let t=i.window.createInputBox();t.ignoreFocusOut=!0;let r=[];try{if(e.isCancellationRequested)return;await new Promise(i=>{r.push(e.onCancellationRequested(()=>t.hide()),t.onDidHide(()=>i(void 0)),t.onDidAccept(()=>i(void 0))),t.title="Connect to Jira",t.placeholder="Please enter the provided authorization code",t.prompt="",t.show()})}finally{t.dispose(),r.forEach(e=>void e.dispose())}}getUriHandlerDeferredExecutor(){return(e,t,r)=>{if(new URLSearchParams(e.query).get("provider")!==s.tp.Jira){r("Invalid provider");return}t(e.toString(!0))}}}},65:(e,t,r)=>{r.d(t,{On:()=>IssueIntegration,T5:()=>HostingIntegration});var i=r(1398),o=r(8803),n=r(3536),s=r(4832),a=r(6950),l=r(6707),u=r(3916),c=r(3446),d=r(1298),h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,g=(e,t,r,i)=>{for(var o,n=i>1?void 0:i?p(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&h(t,r,n),n};let IntegrationBase=class IntegrationBase{constructor(e,t){this.container=e,this.getProvidersApi=t}_onDidChange=new i.EventEmitter;get onDidChange(){return this._onDidChange.event}get authProviderDescriptor(){return{domain:this.domain,scopes:this.authProvider.scopes}}get icon(){return this.id}autolinks(){return[]}get connectedKey(){return`connected:${this.key}`}get maybeConnected(){return void 0===this._session?void 0:null!==this._session}get connectionExpired(){if(this._session?.expiresAt!=null)return new Date(this._session.expiresAt)<new Date}_session;session(){return void 0===this._session?this.ensureSession(!1):this._session??void 0}async connect(){try{return!!await this.ensureSession(!0)}catch(e){return!1}}async disconnect(e){if(e?.currentSessionOnly&&null===this._session)return;let t=null!=this._session;if(t&&!e?.silent){if(e?.currentSessionOnly)(0,n.c8)(this.name);else{let e;let t={title:"Disable"},r={title:"Disable & Sign Out"},o={title:"Cancel",isCloseAffordance:!0};if(null==(e=this.container.integrationAuthentication.supports(this.authProvider.id)?await i.window.showWarningMessage(`Are you sure you want to disable the rich integration with ${this.name}?

Note: signing out clears the saved authentication.`,{modal:!0},t,r,o):await i.window.showWarningMessage(`Are you sure you want to disable the rich integration with ${this.name}?`,{modal:!0},t,o))||e===o)return;e===r&&this.container.integrationAuthentication.deleteSession(this.authProvider.id,this.authProviderDescriptor)}}this.resetRequestExceptionCount(),this._session=null,t&&(e?.currentSessionOnly||this.container.storage.storeWorkspace(this.connectedKey,!1),this._onDidChange.fire(),e?.currentSessionOnly||this.container.integrations.disconnected(this,this.key)),await this.providerOnDisconnect?.()}async reauthenticate(){void 0!==this._session&&(this._session=void 0,await this.ensureSession(!0,!0))}refresh(){this.ensureSession(!1)}requestExceptionCount=0;resetRequestExceptionCount(){this.requestExceptionCount=0}handleProviderException(e,t,r){return e instanceof o.AL||(u.Vy.error(e,t),(e instanceof o.v3||e instanceof o.Iz)&&this.trackRequestException()),r}trackRequestException(){this.requestExceptionCount++,this.requestExceptionCount>=5&&null!==this._session&&this.disconnect({currentSessionOnly:!0})}async isConnected(){return await this.session()!=null}async ensureSession(e,t=!1){let r;if(null!=this._session)return this._session;if(s.H.get("integrations.enabled")){if(e)await this.container.storage.deleteWorkspace(this.connectedKey);else if(!1===this.container.storage.getWorkspace(this.connectedKey))return;try{r=await this.container.integrationAuthentication.getSession(this.authProvider.id,this.authProviderDescriptor,{createIfNeeded:e,forceNewSession:t})}catch(e){if(await this.container.storage.deleteWorkspace(this.connectedKey),e instanceof Error&&e.message.includes("User did not consent"))return;r=null}return void 0!==r||e||await this.container.storage.deleteWorkspace(this.connectedKey),this._session=r??null,this.resetRequestExceptionCount(),null!=r&&(await this.container.storage.storeWorkspace(this.connectedKey,!0),queueMicrotask(()=>{this._onDidChange.fire(),this.container.integrations.connected(this,this.key),this.providerOnConnect?.()})),r??void 0}}getIgnoreSSLErrors(){return this.container.integrations.ignoreSSLErrors(this)}async searchMyIssues(e,t){let r=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let r=await this.searchProviderMyIssues(this._session,null!=e?Array.isArray(e)?e:[e]:void 0,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,void 0)}}async getIssueOrPullRequest(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getIssueOrPullRequest(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderIssueOrPullRequest(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,i,void 0)}})()}),r)}async getCurrentAccount(e){let t=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return;let{expiryOverride:r,...i}=e??{};return this.container.cache.getCurrentAccount(this,()=>({value:(async()=>{try{let e=await this.getProviderCurrentAccount?.(this._session,i);return this.resetRequestExceptionCount(),e}catch(e){return this.handleProviderException(e,t,void 0)}})()}),{expiryOverride:r})}};g([(0,l.Rm)()],IntegrationBase.prototype,"connect",1),g([(0,a.G)(),(0,l.Rm)()],IntegrationBase.prototype,"disconnect",1),g([(0,l.Rm)()],IntegrationBase.prototype,"reauthenticate",1),g([(0,l.Yz)()],IntegrationBase.prototype,"trackRequestException",1),g([(0,a.G)(),(0,l.Yz)({exit:!0})],IntegrationBase.prototype,"isConnected",1),g([(0,a.G)()],IntegrationBase.prototype,"ensureSession",1),g([(0,l.Yz)()],IntegrationBase.prototype,"searchMyIssues",1),g([(0,l.Yz)()],IntegrationBase.prototype,"getIssueOrPullRequest",1);let IssueIntegration=class IssueIntegration extends IntegrationBase{type="issues";async getAccountForResource(e){if(this.maybeConnected??await this.isConnected())try{let t=await this.getProviderAccountForResource(this._session,e);return this.resetRequestExceptionCount(),t}catch(e){return this.handleProviderException(e,void 0,void 0)}}async getResourcesForUser(){if(this.maybeConnected??await this.isConnected())try{let e=await this.getProviderResourcesForUser(this._session);return this.resetRequestExceptionCount(),e}catch(e){return this.handleProviderException(e,void 0,void 0)}}async getProjectsForResources(e){if(this.maybeConnected??await this.isConnected())try{let t=await this.getProviderProjectsForResources(this._session,e);return this.resetRequestExceptionCount(),t}catch(e){return this.handleProviderException(e,void 0,void 0)}}async getProjectsForUser(){let e=await this.getResourcesForUser();if(null!=e)return this.getProjectsForResources(e)}async getIssuesForProject(e,t){if(this.maybeConnected??await this.isConnected())try{let r=await this.getProviderIssuesForProject(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,void 0,void 0)}}};g([(0,a.G)(),(0,l.Yz)()],IssueIntegration.prototype,"getAccountForResource",1),g([(0,a.G)(),(0,l.Yz)()],IssueIntegration.prototype,"getResourcesForUser",1),g([(0,l.Yz)()],IssueIntegration.prototype,"getProjectsForResources",1),g([(0,l.Yz)()],IssueIntegration.prototype,"getIssuesForProject",1);let HostingIntegration=class HostingIntegration extends IntegrationBase{type="hosting";async getAccountForEmail(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let i=await this.getProviderAccountForEmail(this._session,e,t,r);return this.resetRequestExceptionCount(),i}catch(e){return this.handleProviderException(e,i,void 0)}}async getAccountForCommit(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let i=await this.getProviderAccountForCommit(this._session,e,t,r);return this.resetRequestExceptionCount(),i}catch(e){return this.handleProviderException(e,i,void 0)}}async getDefaultBranch(e){let t=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getRepositoryDefaultBranch(e,this,()=>({value:(async()=>{try{let t=await this.getProviderDefaultBranch(this._session,e);return this.resetRequestExceptionCount(),t}catch(e){return this.handleProviderException(e,t,void 0)}})()}))}async getRepositoryMetadata(e,t){let r=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getRepositoryMetadata(e,this,()=>({value:(async()=>{try{let r=await this.getProviderRepositoryMetadata(this._session,e,t?.cancellation);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,void 0)}})()}),{expiryOverride:t?.expiryOverride})}async mergePullRequest(e,t){let r=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return!1;try{let r=await this.mergeProviderPullRequest(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,!1)}}async getPullRequestForBranch(e,t,r){let i=(0,c.dQ)();if(!(this.maybeConnected??await this.isConnected()))return;let{expiryOverride:o,...n}=r??{};return this.container.cache.getPullRequestForBranch(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderPullRequestForBranch(this._session,e,t,n);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,i,void 0)}})()}),{expiryOverride:o})}async getPullRequestForCommit(e,t,r){let i=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())return this.container.cache.getPullRequestForSha(t,e,this,()=>({value:(async()=>{try{let r=await this.getProviderPullRequestForCommit(this._session,e,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,i,void 0)}})()}),r)}async getMyIssuesForRepos(e,t){let r;let i=this.authProvider.id;if(!(this.maybeConnected??await this.isConnected()))return;let o=await this.getProvidersApi();if(i!==d.Q7.GitLab&&(o.isRepoIdsInput(e)||i===d.Q7.AzureDevOps&&!e.every(e=>null!=e.project&&null!=e.namespace))){u.Vy.warn(`Unsupported input for provider ${i}`,"getIssuesForRepos");return}if(i===d.Q7.AzureDevOps){let n=new Set,s=new Set;for(let t of e)n.add(t.namespace),s.add(t.project);if(n.size>1){u.Vy.warn(`Multiple organizations not supported for provider ${i}`,"getIssuesForRepos");return}if(0===n.size){u.Vy.warn(`No organizations found for provider ${i}`,"getIssuesForRepos");return}let a=n.values().next().value;if(t?.filters!=null){let e;if(!o.providerSupportsIssueFilters(i,t.filters)){u.Vy.warn(`Unsupported filters for provider ${i}`,"getIssuesForRepos");return}try{e=await o.getCurrentUserForInstance(i,a)}catch(e){u.Vy.error(e,"getIssuesForRepos");return}if(null==e){u.Vy.warn(`Unable to get current user for ${i}`,"getIssuesForRepos");return}let n=e.name;if(null==n){u.Vy.warn(`Unable to get user property for filter for ${i}`,"getIssuesForRepos");return}r={authorLogin:t.filters.includes(d.mN.Author)?n:void 0,assigneeLogins:t.filters.includes(d.mN.Assignee)?[n]:void 0,mentionLogin:t.filters.includes(d.mN.Mention)?n:void 0}}let l=JSON.parse(t?.cursor??"{}").cursors??[],c=Array.from(s.values()).map(e=>({namespace:a,project:e,cursor:void 0}));l.length>0&&(c=l);try{let e={cursors:[]},t=!1,i=[];return await Promise.all(c.map(async n=>{let s=await o.getIssuesForAzureProject(n.namespace,n.project,{...r,cursor:n.cursor});i.push(...s.values),s.paging?.more&&(t=!0,e.cursors.push({namespace:n.namespace,project:n.project,cursor:s.paging.cursor}))})),{values:i,paging:{more:t,cursor:JSON.stringify(e)}}}catch(e){u.Vy.error(e,"getIssuesForRepos");return}}if(t?.filters!=null){let e;try{e=await o.getCurrentUser(i)}catch(e){u.Vy.error(e,"getIssuesForRepos");return}if(null==e){u.Vy.warn(`Unable to get current user for ${i}`,"getIssuesForRepos");return}let n=e.username;if(null==n){u.Vy.warn(`Unable to get user property for filter for ${i}`,"getIssuesForRepos");return}r={authorLogin:t.filters.includes(d.mN.Author)?n:void 0,assigneeLogins:t.filters.includes(d.mN.Assignee)?[n]:void 0,mentionLogin:t.filters.includes(d.mN.Mention)?n:void 0}}if(o.getProviderIssuesPagingMode(i)===d.W3.Repo&&!o.isRepoIdsInput(e)){let n=JSON.parse(t?.cursor??"{}").cursors??[],s=e.map(e=>({repo:e,cursor:void 0}));n.length>0&&(s=n);try{let e={cursors:[]},n=!1,a=[];return await Promise.all(s.map(async s=>{let l=await o.getIssuesForRepo(i,s.repo,{...r,cursor:s.cursor,baseUrl:t?.customUrl});a.push(...l.values),l.paging?.more&&(n=!0,e.cursors.push({repo:s.repo,cursor:l.paging.cursor}))})),{values:a,paging:{more:n,cursor:JSON.stringify(e)}}}catch(e){u.Vy.error(e,"getIssuesForRepos");return}}try{return await o.getIssuesForRepos(i,e,{...r,cursor:t?.cursor,baseUrl:t?.customUrl})}catch(e){u.Vy.error(e,"getIssuesForRepos");return}}async getMyPullRequestsForRepos(e,t){let r;let i=this.authProvider.id;if(!(this.maybeConnected??await this.isConnected()))return;let o=await this.getProvidersApi();if(i!==d.Q7.GitLab&&(o.isRepoIdsInput(e)||i===d.Q7.AzureDevOps&&!e.every(e=>null!=e.project&&null!=e.namespace))){u.Vy.warn(`Unsupported input for provider ${i}`);return}if(t?.filters!=null){let n,s;if(!o.providerSupportsPullRequestFilters(i,t.filters)){u.Vy.warn(`Unsupported filters for provider ${i}`,"getPullRequestsForRepos");return}if(i===d.Q7.AzureDevOps){let t=new Set;for(let r of e)t.add(r.namespace);if(t.size>1){u.Vy.warn(`Multiple organizations not supported for provider ${i}`,"getPullRequestsForRepos");return}if(0===t.size){u.Vy.warn(`No organizations found for provider ${i}`,"getPullRequestsForRepos");return}let r=t.values().next().value;try{n=await o.getCurrentUserForInstance(i,r)}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}}else try{n=await o.getCurrentUser(i)}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}if(null==n){u.Vy.warn(`Unable to get current user for ${i}`,"getPullRequestsForRepos");return}switch(i){case d.Q7.Bitbucket:case d.Q7.AzureDevOps:s=n.id;break;default:s=n.username}if(null==s){u.Vy.warn(`Unable to get user property for filter for ${i}`,"getPullRequestsForRepos");return}r={authorLogin:t.filters.includes(d.XP.Author)?s:void 0,assigneeLogins:t.filters.includes(d.XP.Assignee)?[s]:void 0,reviewRequestedLogin:t.filters.includes(d.XP.ReviewRequested)?s:void 0,mentionLogin:t.filters.includes(d.XP.Mention)?s:void 0}}if(o.getProviderPullRequestsPagingMode(i)===d.W3.Repo&&!o.isRepoIdsInput(e)){let n=JSON.parse(t?.cursor??"{}").cursors??[],s=e.map(e=>({repo:e,cursor:void 0}));n.length>0&&(s=n);try{let e={cursors:[]},n=!1,a=[];return await Promise.all(s.map(async s=>{let l=await o.getPullRequestsForRepo(i,s.repo,{...r,cursor:s.cursor,baseUrl:t?.customUrl});a.push(...l.values),l.paging?.more&&(n=!0,e.cursors.push({repo:s.repo,cursor:l.paging.cursor}))})),{values:a,paging:{more:n,cursor:JSON.stringify(e)}}}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}}try{return o.getPullRequestsForRepos(i,e,{...r,cursor:t?.cursor,baseUrl:t?.customUrl})}catch(e){u.Vy.error(e,"getPullRequestsForRepos");return}}async searchMyPullRequests(e,t){let r=(0,c.dQ)();if(this.maybeConnected??await this.isConnected())try{let r=await this.searchProviderMyPullRequests(this._session,null!=e?Array.isArray(e)?e:[e]:void 0,t);return this.resetRequestExceptionCount(),r}catch(e){return this.handleProviderException(e,r,void 0)}}};g([(0,a.G)(),(0,l.Yz)()],HostingIntegration.prototype,"getAccountForEmail",1),g([(0,a.G)(),(0,l.Yz)()],HostingIntegration.prototype,"getAccountForCommit",1),g([(0,l.Yz)()],HostingIntegration.prototype,"getDefaultBranch",1),g([(0,l.Yz)()],HostingIntegration.prototype,"getRepositoryMetadata",1),g([(0,l.Yz)()],HostingIntegration.prototype,"getPullRequestForBranch",1),g([(0,l.Yz)()],HostingIntegration.prototype,"getPullRequestForCommit",1),g([(0,l.Yz)()],HostingIntegration.prototype,"searchMyPullRequests",1)},552:(e,t,r)=>{r.r(t),r.d(t,{AzureDevOpsIntegration:()=>AzureDevOpsIntegration});var i=r(3916),o=r(65),n=r(1298);let s=n.Mt[n.Q7.AzureDevOps],a=Object.freeze({id:s.id,scopes:s.scopes});let AzureDevOpsIntegration=class AzureDevOpsIntegration extends o.T5{authProvider=a;id=n.Q7.AzureDevOps;key=this.id;name="Azure DevOps";get domain(){return s.domain}get apiBaseUrl(){return"https://dev.azure.com"}async getReposForAzureProject(e,t,r){if(this.maybeConnected??await this.isConnected())try{return await (await this.getProvidersApi()).getReposForAzureProject(e,t,{cursor:r?.cursor})}catch(e){i.Vy.error(e,"getReposForAzureProject");return}}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}async getProviderAccountForCommit(e,t,r,i){return Promise.resolve(void 0)}async getProviderAccountForEmail(e,t,r,i){return Promise.resolve(void 0)}async getProviderDefaultBranch(e,t){return Promise.resolve(void 0)}async getProviderIssueOrPullRequest(e,t,r){return Promise.resolve(void 0)}async getProviderPullRequestForBranch(e,t,r,i){return Promise.resolve(void 0)}async getProviderPullRequestForCommit(e,t,r){return Promise.resolve(void 0)}async getProviderRepositoryMetadata(e,t,r){return Promise.resolve(void 0)}async searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}async searchProviderMyIssues(e,t){return Promise.resolve(void 0)}}},7287:(e,t,r)=>{r.r(t),r.d(t,{BitbucketIntegration:()=>BitbucketIntegration});var i=r(65),o=r(1298);let n=o.Mt[o.Q7.Bitbucket],s=Object.freeze({id:n.id,scopes:n.scopes});let BitbucketIntegration=class BitbucketIntegration extends i.T5{authProvider=s;id=o.Q7.Bitbucket;key=this.id;name="Bitbucket";get domain(){return n.domain}get apiBaseUrl(){return"https://api.bitbucket.org/2.0"}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}async getProviderAccountForCommit(e,t,r,i){return Promise.resolve(void 0)}async getProviderAccountForEmail(e,t,r,i){return Promise.resolve(void 0)}async getProviderDefaultBranch(e,t){return Promise.resolve(void 0)}async getProviderIssueOrPullRequest(e,t,r){return Promise.resolve(void 0)}async getProviderPullRequestForBranch(e,t,r,i){return Promise.resolve(void 0)}async getProviderPullRequestForCommit(e,t,r){return Promise.resolve(void 0)}async getProviderRepositoryMetadata(e,t,r){return Promise.resolve(void 0)}async searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}async searchProviderMyIssues(e,t){return Promise.resolve(void 0)}}},6315:(e,t,r)=>{r.r(t),r.d(t,{GitHubEnterpriseIntegration:()=>GitHubEnterpriseIntegration,GitHubIntegration:()=>GitHubIntegration});var i=r(1398),o=r(304),n=r(6707),s=r(1014),a=r(65),l=r(1298),u=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let d=l.Mt[l.Q7.GitHub],h=Object.freeze({id:d.id,scopes:d.scopes}),p=l.Mt[l.PY.GitHubEnterprise],g=Object.freeze({id:p.id,scopes:p.scopes});let GitHubIntegrationBase=class GitHubIntegrationBase extends a.T5{async getProviderAccountForCommit({accessToken:e},t,r,i){return(await this.container.github)?.getAccountForCommit(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderAccountForEmail({accessToken:e},t,r,i){return(await this.container.github)?.getAccountForEmail(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderDefaultBranch({accessToken:e},t){return(await this.container.github)?.getDefaultBranch(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl})}async getProviderIssueOrPullRequest({accessToken:e},t,r){return(await this.container.github)?.getIssueOrPullRequest(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl})}async getProviderPullRequestForBranch({accessToken:e},t,i,o){let{include:n,...s}=o??{},a=(await Promise.resolve().then(r.bind(r,1116))).toGitHubPullRequestState;return(await this.container.github)?.getPullRequestForBranch(this,e,t.owner,t.name,i,{...s,include:n?.map(e=>a(e)),baseUrl:this.apiBaseUrl})}async getProviderPullRequestForCommit({accessToken:e},t,r){return(await this.container.github)?.getPullRequestForCommit(this,e,t.owner,t.name,r,{baseUrl:this.apiBaseUrl})}async getProviderRepositoryMetadata({accessToken:e},t,r){return(await this.container.github)?.getRepositoryMetadata(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl},r)}async searchProviderMyPullRequests({accessToken:e},t,r){return(await this.container.github)?.searchMyPullRequests(this,e,{repos:t?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl},r)}async searchProviderMyIssues({accessToken:e},t,r){return(await this.container.github)?.searchMyIssues(this,e,{repos:t?.map(e=>`${e.owner}/${e.name}`),baseUrl:this.apiBaseUrl},r)}async mergeProviderPullRequest({accessToken:e},t,r){let i=t instanceof o.B9?t.nodeId:t.id,n=t instanceof o.B9?t.refs?.head?.sha:t.headRefSha;return null!=i&&null!=n&&((await this.container.github)?.mergePullRequest(this,e,i,n,{mergeMethod:r?.mergeMethod})??!1)}async getProviderCurrentAccount({accessToken:e},t){return(await this.container.github)?.getCurrentAccount(this,e,{...t,baseUrl:this.apiBaseUrl})}};let GitHubIntegration=class GitHubIntegration extends GitHubIntegrationBase{authProvider=h;id=l.Q7.GitHub;key=this.id;name="GitHub";get domain(){return d.domain}get apiBaseUrl(){return"https://api.github.com"}async refresh(){null==await i.authentication.getSession(this.authProvider.id,this.authProvider.scopes)&&this.maybeConnected?this.disconnect():super.refresh()}};let GitHubEnterpriseIntegration=class GitHubEnterpriseIntegration extends GitHubIntegrationBase{constructor(e,t,r){super(e,t),this._domain=r}authProvider=g;id=l.PY.GitHubEnterprise;key=`${this.id}:${this.domain}`;name="GitHub Enterprise";get domain(){return this._domain}get apiBaseUrl(){return`https://${this._domain}/api/v3`}async connect(){return!!await (0,s.KH)(this.container,`Rich integration with ${this.name} is a Pro feature.`,{source:"integrations",detail:{action:"connect",integration:this.id}})&&super.connect()}};((e,t,r,i)=>{for(var o,n=c(t,r),s=e.length-1;s>=0;s--)(o=e[s])&&(n=o(t,r,n)||n);return i&&n&&u(t,r,n)})([(0,n.Rm)()],GitHubEnterpriseIntegration.prototype,"connect",1)},6088:(e,t,r)=>{function i(){return"object"==typeof navigator&&"userAgent"in navigator?navigator.userAgent:"object"==typeof process&&void 0!==process.version?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}r.r(t),r.d(t,{GitHubApi:()=>GitHubApi});var o=`octokit-endpoint.js/0.0.0-development ${i()}`;function n(e){for(let t in e)void 0===e[t]&&delete e[t];return e}function s(e,t,r){var i;if("string"==typeof t){let[e,i]=t.split(" ");r=Object.assign(i?{method:e,url:i}:{url:e},r)}else r=Object.assign({},t);r.headers=(i=r.headers)?Object.keys(i).reduce((e,t)=>(e[t.toLowerCase()]=i[t],e),{}):{},n(r),n(r.headers);let o=function e(t,r){let i=Object.assign({},t);return Object.keys(r).forEach(o=>{(function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(r[o])&&o in t?i[o]=e(t[o],r[o]):Object.assign(i,{[o]:r[o]})}),i}(e||{},r);return"/graphql"===r.url&&(e&&e.mediaType.previews?.length&&(o.mediaType.previews=e.mediaType.previews.filter(e=>!o.mediaType.previews.includes(e)).concat(o.mediaType.previews)),o.mediaType.previews=(o.mediaType.previews||[]).map(e=>e.replace(/-preview/,""))),o}var a=/\{[^}]+\}/g;function l(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function u(e,t){let r={__proto__:null};for(let i of Object.keys(e))-1===t.indexOf(i)&&(r[i]=e[i]);return r}function c(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(e){return/%[0-9A-Fa-f]/.test(e)||(e=encodeURI(e).replace(/%5B/g,"[").replace(/%5D/g,"]")),e}).join("")}function d(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function h(e,t,r){return(t="+"===e||"#"===e?c(t):d(t),r)?d(r)+"="+t:t}function p(e){return null!=e}function g(e){return";"===e||"&"===e||"?"===e}function m(e,t){var r=["+","#",".","/",";","?","&"];return"/"===(e=e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(e,i,o){if(!i)return c(o);{let e="",o=[];if(-1!==r.indexOf(i.charAt(0))&&(e=i.charAt(0),i=i.substr(1)),i.split(/,/g).forEach(function(r){var i=/([^:\*]*)(?::(\d+)|(\*))?/.exec(r);o.push(function(e,t,r,i){var o=e[r],n=[];if(p(o)&&""!==o){if("string"==typeof o||"number"==typeof o||"boolean"==typeof o)o=o.toString(),i&&"*"!==i&&(o=o.substring(0,parseInt(i,10))),n.push(h(t,o,g(t)?r:""));else if("*"===i)Array.isArray(o)?o.filter(p).forEach(function(e){n.push(h(t,e,g(t)?r:""))}):Object.keys(o).forEach(function(e){p(o[e])&&n.push(h(t,o[e],e))});else{let e=[];Array.isArray(o)?o.filter(p).forEach(function(r){e.push(h(t,r))}):Object.keys(o).forEach(function(r){p(o[r])&&(e.push(d(r)),e.push(h(t,o[r].toString())))}),g(t)?n.push(d(r)+"="+e.join(",")):0!==e.length&&n.push(e.join(","))}}else";"===t?p(o)&&n.push(d(r)):""===o&&("&"===t||"?"===t)?n.push(d(r)+"="):""===o&&n.push("");return n}(t,e,i[1],i[2]||i[3]))}),!e||"+"===e)return o.join(",");var n=",";return"?"===e?n="&":"#"!==e&&(n=e),(0!==o.length?e:"")+o.join(n)}}))?e:e.replace(/\/$/,"")}function f(e){let t,r=e.method.toUpperCase(),i=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),o=Object.assign({},e.headers),n=u(e,["method","baseUrl","url","headers","request","mediaType"]),s=function(e){let t=e.match(a);return t?t.map(l).reduce((e,t)=>e.concat(t),[]):[]}(i);i=({expand:m.bind(null,i)}).expand(n),/^http/.test(i)||(i=e.baseUrl+i);let c=u(n,Object.keys(e).filter(e=>s.includes(e)).concat("baseUrl"));if(!/application\/octet-stream/i.test(o.accept)&&(e.mediaType.format&&(o.accept=o.accept.split(/,/).map(t=>t.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),i.endsWith("/graphql")&&e.mediaType.previews?.length)){let t=o.accept.match(/[\w-]+(?=-preview)/g)||[];o.accept=t.concat(e.mediaType.previews).map(t=>{let r=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${t}-preview${r}`}).join(",")}return["GET","HEAD"].includes(r)?i=function(e,t){let r=/\?/.test(e)?"&":"?",i=Object.keys(t);return 0===i.length?e:e+r+i.map(e=>"q"===e?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${e}=${encodeURIComponent(t[e])}`).join("&")}(i,c):"data"in c?t=c.data:Object.keys(c).length&&(t=c),o["content-type"]||void 0===t||(o["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&void 0===t&&(t=""),Object.assign({method:r,url:i,headers:o},void 0!==t?{body:t}:null,e.request?{request:e.request}:null)}function y(e,t,r){return f(s(e,t,r))}var v=function e(t,r){let i=s(t,r);return Object.assign(y.bind(null,i),{DEFAULTS:i,defaults:e.bind(null,i),merge:s.bind(null,i),parse:f})}(null,{method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":o},mediaType:{format:""}});let RequestError=class RequestError extends Error{name;status;request;response;constructor(e,t,r){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t,"response"in r&&(this.response=r.response);let i=Object.assign({},r.request);r.request.headers.authorization&&(i.headers=Object.assign({},r.request.headers,{authorization:r.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),i.url=i.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=i}};function w(e){let t,r;let i=e.request&&e.request.log?e.request.log:console,o=e.request?.parseSuccessResponseBody!==!1;((function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);if(null===t)return!0;let r=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Function.prototype.call(r)===Function.prototype.call(e)})(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let n={},{fetch:s}=globalThis;if(e.request?.fetch&&(s=e.request.fetch),!s)throw Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");return s(e.url,{method:e.method,body:e.body,redirect:e.request?.redirect,headers:Object.fromEntries(Object.entries(e.headers).map(([e,t])=>[e,String(t)])),signal:e.request?.signal,...e.body&&{duplex:"half"}}).then(async s=>{for(let e of(r=s.url,t=s.status,s.headers))n[e[0]]=e[1];if("deprecation"in n){let t=n.link&&n.link.match(/<([^>]+)>; rel="deprecation"/),r=t&&t.pop();i.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${n.sunset}${r?`. See ${r}`:""}`)}if(204!==t&&205!==t){if("HEAD"===e.method){if(t<400)return;throw new RequestError(s.statusText,t,{response:{url:r,status:t,headers:n,data:void 0},request:e})}if(304===t)throw new RequestError("Not modified",t,{response:{url:r,status:t,headers:n,data:await b(s)},request:e});if(t>=400){let i;let o=await b(s);throw new RequestError("string"==typeof o?o:(i="documentation_url"in o?` - ${o.documentation_url}`:"","message"in o)?Array.isArray(o.errors)?`${o.message}: ${o.errors.map(JSON.stringify).join(", ")}${i}`:`${o.message}${i}`:`Unknown error: ${JSON.stringify(o)}`,t,{response:{url:r,status:t,headers:n,data:o},request:e})}return o?await b(s):s.body}}).then(e=>({status:t,url:r,headers:n,data:e})).catch(t=>{if(t instanceof RequestError||"AbortError"===t.name)throw t;let r=t.message;throw"TypeError"===t.name&&"cause"in t&&(t.cause instanceof Error?r=t.cause.message:"string"==typeof t.cause&&(r=t.cause)),new RequestError(r,500,{request:e})})}async function b(e){let t=e.headers.get("content-type");return/application\/json/.test(t)?e.json().catch(()=>e.text()).catch(()=>""):!t||/^text\/|charset=utf-8$/.test(t)?e.text():e.arrayBuffer()}var R=function e(t,r){let i=t.defaults(r);return Object.assign(function(t,r){let o=i.merge(t,r);if(!o.request||!o.request.hook)return w(i.parse(o));let n=(e,t)=>w(i.parse(i.merge(e,t)));return Object.assign(n,{endpoint:i,defaults:e.bind(null,i)}),o.request.hook(n,o)},{endpoint:i,defaults:e.bind(null,i)})}(v,{headers:{"user-agent":`octokit-request.js/0.0.0-development ${i()}`}}),P=class extends Error{constructor(e,t,r){super(`Request failed due to following response errors:
`+r.errors.map(e=>` - ${e.message}`).join("\n")),this.request=e,this.headers=t,this.response=r,this.errors=r.errors,this.data=r.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}name="GraphqlResponseError";errors;data},C=["method","baseUrl","url","headers","request","query","mediaType"],$=["query","method","url"],q=/\/api\/v3\/?$/,A=function e(t,r){let i=t.defaults(r);return Object.assign((e,t)=>(function(e,t,r){if(r){if("string"==typeof t&&"query"in r)return Promise.reject(Error('[@octokit/graphql] "query" cannot be used as variable name'));for(let e in r)if($.includes(e))return Promise.reject(Error(`[@octokit/graphql] "${e}" cannot be used as variable name`))}let i="string"==typeof t?Object.assign({query:t},r):t,o=Object.keys(i).reduce((e,t)=>(C.includes(t)?e[t]=i[t]:(e.variables||(e.variables={}),e.variables[t]=i[t]),e),{}),n=i.baseUrl||e.endpoint.DEFAULTS.baseUrl;return q.test(n)&&(o.url=n.replace(q,"/api/graphql")),e(o).then(e=>{if(e.data.errors){let t={};for(let r of Object.keys(e.headers))t[r]=e.headers[r];throw new P(o,t,e.data)}return e.data.data})})(i,e,t),{defaults:e.bind(null,i),endpoint:i.endpoint})}(R,{headers:{"user-agent":`octokit-graphql.js/0.0.0-development ${i()}`},method:"POST",url:"/graphql"}),G=r(1398),S=r(3459),I=r(7372),D=r(8803),E=r(304),U=r(6645),F=r(4862),k=r(3536),x=r(4832),_=r(6707),H=r(4026),B=r(3916),O=r(3446),T=r(937),M=r(3166),j=r(4766),L=r(1116),z=Object.defineProperty,N=Object.getOwnPropertyDescriptor,V=(e,t,r,i)=>{for(var o,n=i>1?void 0:i?N(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&z(t,r,n),n};let Q=Object.freeze({values:[]}),Y=Object.freeze({ranges:[]}),W=`
createdAt
closed
closedAt
id
number
title
updatedAt
url
state
`,J=`
${W}
assignees(first: 10) {
	nodes {
		login
		avatarUrl
		url
	}
}
author {
	login
	avatarUrl
	url
}
baseRefName
baseRefOid
baseRepository {
	name
	owner {
		login
	}
	url
}
checksUrl
isDraft
isCrossRepository
isReadByViewer
headRefName
headRefOid
headRepository {
	name
	owner {
		login
	}
	url
}
permalink
additions
deletions
mergeable
viewerCanUpdate
mergedAt
mergedBy {
	login
}
reactions(content: THUMBS_UP) {
	totalCount
}
repository {
	isFork
	name
	owner {
		login
	}
	viewerPermission
}
reviewDecision
reviewRequests(first: 10) {
	nodes {
		asCodeOwner
		id
		requestedReviewer {
			... on User {
				login
				avatarUrl
				url
			}
		}
	}
}
latestReviews (first: 10) {
	nodes {
		author {
			login
			avatarUrl
			url
		}
		state
	}
}
totalCommentsCount
commits(last: 1) {
	nodes {
		commit {
			oid
			statusCheckRollup {
				state
			}
		}
	}
}
`,K=`
createdAt
closed
closedAt
id
number
title
updatedAt
url
state
`,Z=`
${K}
assignees(first: 100) {
	nodes {
		login
		url
		avatarUrl
	}
}
author {
	login
	avatarUrl
	url
}
comments {
	totalCount
}
labels(first: 20) {
	nodes {
		color
		name
	}
}
reactions(content: THUMBS_UP) {
	totalCount
}
repository {
	name
	owner {
		login
	}
	viewerPermission
}
`;let GitHubApi=class GitHubApi{_onDidReauthenticate=new G.EventEmitter;get onDidReauthenticate(){return this._onDidReauthenticate.event}_disposable;constructor(e){this._disposable=x.H.onDidChangeAny(e=>{(x.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||x.H.changed(e,["outputLevel","proxy"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._proxyAgent=null,this._defaults.clear(),this._enterpriseVersions.clear()}_proxyAgent=null;get proxyAgent(){if(!I.HZ)return null===this._proxyAgent&&(this._proxyAgent=(0,S.cQ)()),this._proxyAgent}async getCurrentAccount(e,t,r){let i=(0,O.dQ)();try{let o=`query getCurrentAccount($avatarSize: Int) {
	viewer {
		name
		email
		login
		avatarUrl(size: $avatarSize)
	}
}`,n=await this.graphql(e,t,o,{...r},i);if(n?.viewer==null)return;return{provider:e,name:n.viewer.name??void 0,email:n.viewer.email??void 0,avatarUrl:!n.viewer.avatarUrl||X(r)?n.viewer.avatarUrl??void 0:n.viewer.email&&r?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,r.baseUrl,n.viewer.email,r.avatarSize):void 0,username:n.viewer.login??void 0}}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,i)}}async getAccountForCommit(e,t,r,i,o,n){let s=(0,O.dQ)();try{let a=`query getAccountForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				author {
					name
					email
					avatarUrl(size: $avatarSize)
					user {
						login
					}
				}
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...n,owner:r,repo:i,ref:o},s),u=l?.repository?.object?.author;if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||X(n)?u.avatarUrl??void 0:u.email&&n?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,n.baseUrl,u.email,n.avatarSize):void 0,username:u.user?.login??void 0}}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,s)}}async getAccountForEmail(e,t,r,i,o,n){let s=(0,O.dQ)();try{let a=`query getAccountForEmail(
	$emailQuery: String!
	$avatarSize: Int
) {
	search(type: USER, query: $emailQuery, first: 1) {
		nodes {
			... on User {
				name
				email
				avatarUrl(size: $avatarSize)
				login
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...n,owner:r,repo:i,emailQuery:`in:email ${o}`},s),u=l?.search?.nodes?.[0];if(null==u)return;return{provider:e,name:u.name??void 0,email:u.email??void 0,avatarUrl:!u.avatarUrl||X(n)?u.avatarUrl??void 0:u.email&&n?.baseUrl!=null?await this.createEnterpriseAvatarUrl(e,t,n.baseUrl,u.email,n.avatarSize):void 0,username:u.login??void 0}}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,s)}}async getDefaultBranch(e,t,r,i,o){let n=(0,O.dQ)();try{let s=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		defaultBranchRef {
			name
		}
	}
}`,a=await this.graphql(e,t,s,{...o,owner:r,repo:i},n),l=a?.repository?.defaultBranchRef?.name??void 0;if(null==l)return;return{provider:e,name:l}}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,n)}}async getIssueOrPullRequest(e,t,r,i,o,n){let s=(0,O.dQ)();try{let a=`query getIssueOrPullRequest(
	$owner: String!
	$repo: String!
	$number: Int!
) {
	repository(name: $repo, owner: $owner) {
		issueOrPullRequest(number: $number) {
			__typename
			... on Issue {
				${K}
			}
			... on PullRequest {
				${W}
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...n,owner:r,repo:i,number:o},s),u=l?.repository?.issueOrPullRequest;if(null==u)return;return{provider:e,type:"PullRequest"===u.__typename?"pullrequest":"issue",id:String(u.number),nodeId:u.id,createdDate:new Date(u.createdAt),updatedDate:new Date(u.updatedAt),title:u.title,closed:u.closed,closedDate:null==u.closedAt?void 0:new Date(u.closedAt),url:u.url,state:(0,L.fromGitHubIssueOrPullRequestState)(u.state)}}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,s)}}async getPullRequestForBranch(e,t,r,i,o,n){let s=(0,O.dQ)();try{let a=`query getPullRequestForBranch(
	$owner: String!
	$repo: String!
	$branch: String!
	$limit: Int!
	$include: [PullRequestState!]
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		ref(qualifiedName: $branch) {
			associatedPullRequests(first: $limit, orderBy: {field: UPDATED_AT, direction: DESC}, states: $include) {
				nodes {
					author {
						login
						avatarUrl(size: $avatarSize)
						url
					}
					createdAt
					permalink
					number
					id
					title
					state
					updatedAt
					closedAt
					mergedAt
					baseRefName
					baseRefOid
					baseRepository {
						name
						owner {
							login
						}
						url
					}
					headRefName
					headRefOid
					headRepository {
						name
						owner {
							login
						}
						url
					}
					repository {
						isFork
						name
						owner {
							login
						}
						viewerPermission
					}
					isCrossRepository
				}
			}
		}
	}
}`,l=await this.graphql(e,t,a,{...n,owner:r,repo:i,branch:`refs/heads/${o}`,limit:10},s),u=l?.repository?.ref?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==u||0===u.length)return;return u.length>1&&u.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("OPEN"===e.state?-1:1)-("OPEN"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,L.fromGitHubPullRequest)(u[0],e)}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,s)}}async getPullRequestForCommit(e,t,r,i,o,n,s){let a=(0,O.dQ)();try{let l=`query getPullRequestForCommit(
	$owner: String!
	$repo: String!
	$ref: GitObjectID!
	$avatarSize: Int
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $ref) {
			... on Commit {
				associatedPullRequests(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						author {
							login
							avatarUrl(size: $avatarSize)
							url
						}
						createdAt
						permalink
						number
						id
						title
						state
						updatedAt
						closedAt
						mergedAt
						baseRefName
						baseRefOid
						baseRepository {
							name
							owner {
								login
							}
							url
						}
						headRefName
						headRefOid
						headRepository {
							name
							owner {
								login
							}
							url
						}
						repository {
							name
							isFork
							owner {
								login
							}
							viewerPermission
						}
						isCrossRepository
					}
				}
			}
		}
	}
}`,u=await this.graphql(e,t,l,{...n,owner:r,repo:i,ref:o},a,s),c=u?.repository?.object?.associatedPullRequests?.nodes?.filter(e=>null!=e&&(!e.repository.isFork||e.repository.owner.login===r));if(null==c||0===c.length)return;return c.length>1&&c.sort((e,t)=>(e.repository.owner.login===r?-1:1)-(t.repository.owner.login===r?-1:1)||("MERGED"===e.state?-1:1)-("MERGED"===t.state?-1:1)||new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),(0,L.fromGitHubPullRequest)(c[0],e)}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,a)}}async getRepositoryMetadata(e,t,r,i,o,n){let s=(0,O.dQ)();try{let a=`query getRepositoryMetadata(
	$owner: String!
	$repo: String!
) {
	repository(name: $repo, owner: $owner) {
		owner {
			login
		}
		name
		parent {
			owner {
				login
			}
			name
		}
	}
}`,l=await this.graphql(e,t,a,{...o,owner:r,repo:i},s,n),u=l?.repository??void 0;if(null==u)return;return{provider:e,owner:u.owner.login,name:u.name,isFork:null!=u.parent,parent:null!=u.parent?{owner:u.parent.owner.login,name:u.parent.name}:void 0}}catch(t){if(t instanceof D.g3)return;throw this.handleException(t,e,s)}}async getBlame(e,t,r,i,o){let n=(0,O.dQ)();try{let s=`query getBlameRanges(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	viewer { name }
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			...on Commit {
				blame(path: $path) {
					ranges {
						startingLine
						endingLine
						commit {
							oid
							parents(first: 3) { nodes { oid } }
							message
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								date
								email
								name
							}
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i,path:o},n);if(null==a)return Y;let l=a.repository?.object?.blame?.ranges;if(null==l||0===l.length)return{ranges:[],viewer:a.viewer?.name};return{ranges:l,viewer:a.viewer?.name}}catch(e){if(e instanceof D.g3)return Y;throw this.handleException(e,void 0,n)}}async getBranches(e,t,r,i){let o=(0,O.dQ)();try{let n=`query getBranches(
	$owner: String!
	$repo: String!
	$branchQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $branchQuery, refPrefix: "refs/heads/", first: $limit, after: $cursor) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Commit {
						authoredDate
						committedDate
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,n,{owner:t,repo:r,branchQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},o);if(null==s)return Q;let a=s.repository?.refs;if(null==a)return Q;return{paging:{cursor:a.pageInfo.endCursor,more:a.pageInfo.hasNextPage},values:a.nodes}}catch(e){if(e instanceof D.g3)return Q;throw this.handleException(e,void 0,o)}}async getCommit(e,t,r,i){let o=(0,O.dQ)();try{let n=await this.request(void 0,e,"GET /repos/{owner}/{repo}/commits/{ref}",{owner:t,repo:r,ref:i},o),s=n?.data;if(null==s)return;let{commit:a}=s;return{oid:s.sha,parents:{nodes:s.parents.map(e=>({oid:e.sha}))},message:a.message,additions:s.stats?.additions,changedFiles:s.files?.length,deletions:s.stats?.deletions,author:{avatarUrl:s.author?.avatar_url??void 0,date:a.author?.date??new Date().toString(),email:a.author?.email??void 0,name:a.author?.name??""},committer:{date:a.committer?.date??new Date().toString(),email:a.committer?.email??void 0,name:a.committer?.name??""},files:s.files}}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,o)}}async getCommitForFile(e,t,r,i,o){if((0,U.HH)(i))return this.getCommit(e,t,r,i);let n=await this.getCommits(e,t,r,i,{limit:1,path:o});if(0!==n.values.length)return{...await this.getCommit(e,t,r,n.values[0].oid)??n.values[0],viewer:n.viewer}}async getCommitBranches(e,t,r,i,o,n){let s=(0,O.dQ)();try{let a=`query getCommitBranches(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/heads/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: ${"contains"===o?10:1}, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,l=await this.graphql(void 0,e,a,{owner:t,repo:r,since:n?.toISOString(),until:n?.toISOString()},s),u=l?.repository?.refs?.nodes;if(null==u)return[];let c=[];for(let e of u)for(let t of e.target.history.nodes)if(i.includes(t.oid)){c.push(e.name);break}return c}catch(e){if(e instanceof D.g3)return[];throw this.handleException(e,void 0,s)}}async getCommitCount(e,t,r,i){let o=(0,O.dQ)();try{let n=`query getCommitCount(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: 1) {
						totalCount
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},o);return s?.repository?.ref?.target.history.totalCount}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,o)}}async getCommitOnBranch(e,t,r,i,o,n,s){let a=(0,O.dQ)();try{let l=`query getCommitOnBranch(
	$owner: String!
	$repo: String!
	$ref: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		ref(qualifiedName: $ref) {
			target {
				... on Commit {
					history(first: ${"contains"===n?100:1}, since: $since until: $until) {
						nodes { oid }
					}
				}
			}
		}
	}
}`,u=await this.graphql(void 0,e,l,{owner:t,repo:r,ref:`refs/heads/${i}`,since:s?.toISOString(),until:s?.toISOString()},a),c=u?.repository?.ref.target.history.nodes;if(null==c)return[];let d=[];for(let e of c)if(o.includes(e.oid)){d.push(i);break}return d}catch(e){if(e instanceof D.g3)return[];throw this.handleException(e,void 0,a)}}async getCommits(e,t,r,i,o){let n=(0,O.dQ)();if(o?.limit===1&&o?.path==null)return this.getCommitsCoreSingle(e,t,r,i);try{let s;let a=`query getCommits(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String
	$author: CommitAuthor
	$after: String
	$before: String
	$limit: Int = 100
	$since: GitTimestamp
	$until: GitTimestamp
) {
	viewer { name }
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $limit, author: $author, path: $path, after: $after, before: $before, since: $since, until: $until) {
					pageInfo {
						startCursor
						endCursor
						hasNextPage
						hasPreviousPage
					}
					nodes {
						... on Commit {
							oid
							message
							parents(first: 3) { nodes { oid } }
							additions
							changedFiles
							deletions
							author {
								avatarUrl
								date
								email
								name
							}
							committer {
								 date
								 email
								 name
							 }
						}
					}
				}
			}
		}
	}
}`;if(o?.authors!=null){if(1===o.authors.length){let[e]=o.authors;s={id:e.id,emails:e.email?[e.email]:void 0}}else{let e=o.authors.filter(e=>e.email).map(e=>e.email);s=e.length?{emails:e}:void 0}}let l=await this.graphql(void 0,e,a,{owner:t,repo:r,ref:i,after:o?.after,before:o?.before,path:o?.path,author:s,limit:Math.min(100,o?.limit??100),since:"string"==typeof o?.since?o?.since:o?.since?.toISOString(),until:"string"==typeof o?.until?o?.until:o?.until?.toISOString()},n),u=l?.repository?.object?.history;if(null==u)return Q;return{paging:null!=u.pageInfo.endCursor?{cursor:u.pageInfo.endCursor??void 0,more:u.pageInfo.hasNextPage}:void 0,values:u.nodes,viewer:l?.viewer.name}}catch(e){if(e instanceof D.g3)return Q;throw this.handleException(e,void 0,n)}}async getCommitsCoreSingle(e,t,r,i){let o=(0,O.dQ)();try{let n=`query getCommit(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	viewer { name }
	repository(name: $repo owner: $owner) {
		object(expression: $ref) {
			...on Commit {
				oid
				parents(first: 3) { nodes { oid } }
				message
				additions
				changedFiles
				deletions
				author {
					avatarUrl
					date
					email
					name
				}
				committer {
					date
					email
					name
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,n,{owner:t,repo:r,ref:i},o);if(null==s)return Q;let a=s.repository?.object;return null!=a?{values:[a],viewer:s.viewer.name}:Q}catch(e){if(e instanceof D.g3)return Q;throw this.handleException(e,void 0,o)}}async getCommitRefs(e,t,r,i,o){let n=(0,O.dQ)();try{let s=`query getCommitRefs(
	$owner: String!
	$repo: String!
	$ref: String!
	$after: String
	$before: String
	$first: Int
	$last: Int
	$path: String
	$since: GitTimestamp
	$until: GitTimestamp
) {
	repository(name: $repo, owner: $owner) {
		object(expression: $ref) {
			... on Commit {
				history(first: $first, last: $last, path: $path, since: $since, until: $until, after: $after, before: $before) {
					pageInfo { startCursor, endCursor, hasNextPage, hasPreviousPage }
					totalCount
					nodes { oid }
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i,path:o?.path,first:o?.first,last:o?.last,after:o?.after,before:o?.before,since:o?.since,until:o?.until},n),l=a?.repository?.object?.history;if(null==l)return;return{pageInfo:l.pageInfo,totalCount:l.totalCount,values:l.nodes}}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,n)}}async getCommitTags(e,t,r,i,o){let n=(0,O.dQ)();try{let s=`query getCommitTags(
	$owner: String!
	$repo: String!
	$since: GitTimestamp!
	$until: GitTimestamp!
) {
	repository(owner: $owner, name: $repo) {
		refs(first: 20, refPrefix: "refs/tags/") {
			nodes {
				name
				target {
					... on Commit {
						history(first: 3, since: $since until: $until) {
							nodes { oid }
						}
					}
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,s,{owner:t,repo:r,since:o.toISOString(),until:o.toISOString()},n),l=a?.repository?.refs?.nodes;if(null==l)return[];let u=[];for(let e of l)for(let t of e.target.history.nodes)if(t.oid===i){u.push(e.name);break}return u}catch(e){if(e instanceof D.g3)return[];throw this.handleException(e,void 0,n)}}async getNextCommitRefs(e,t,r,i,o,n){let s;let a=await this.getCommitDate(e,t,r,n);if(null==a)return[];let l=await this.getCommitRefs(e,t,r,i,{path:o,first:1,since:a});if(null==l)return[];let u=`${l.pageInfo.startCursor.split(" ",1)[0]} ${l.totalCount}`;if([,s]=u.split(" ",2),s=Math.min(parseInt(s,10),5),null==(l=await this.getCommitRefs(e,t,r,i,{path:o,last:s,before:u})))return[];let c=[];for(let{oid:e}of l.values){if(e===n)break;c.push(e)}return c.reverse()}async getCommitDate(e,t,r,i){let o=(0,O.dQ)();try{let n=`query getCommitDate(
	$owner: String!
	$repo: String!
	$sha: GitObjectID!
) {
	repository(name: $repo, owner: $owner) {
		object(oid: $sha) {
			... on Commit { committer { date } }
		}
	}
}`,s=await this.graphql(void 0,e,n,{owner:t,repo:r,sha:i},o);return s?.repository?.object?.committer.date}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,o)}}async getContributors(e,t,r){let i=(0,O.dQ)();try{let o=await this.request(void 0,e,"GET /repos/{owner}/{repo}/contributors",{owner:t,repo:r,per_page:100},i),n=o?.data;if(null==n)return[];return o.data}catch(e){if(e instanceof D.g3)return[];throw this.handleException(e,void 0,i)}}async getDefaultBranchName(e,t,r){let i=(0,O.dQ)();try{let o=`query getDefaultBranch(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		defaultBranchRef {
			name
		}
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r},i);if(null==n)return;return n.repository?.defaultBranchRef?.name??void 0}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,i)}}async getCurrentUser(e,t,r){let i=(0,O.dQ)();try{let o=`query getCurrentUser(
	$owner: String!
	$repo: String!
) {
	viewer { name, email, login, id }
	repository(owner: $owner, name: $repo) { viewerPermission }
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r},i);if(null==n)return;return{name:n.viewer?.name,email:n.viewer?.email,username:n.viewer?.login,id:n.viewer?.id}}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,i)}}async getRepositoryVisibility(e,t,r){let i=(0,O.dQ)();try{let o=`query getRepositoryVisibility(
	$owner: String!
	$repo: String!
) {
	repository(owner: $owner, name: $repo) {
		visibility
	}
}`,n=await this.graphql(void 0,e,o,{owner:t,repo:r},i);if(n?.repository?.visibility==null)return;return"PUBLIC"===n.repository.visibility?"public":"private"}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,i)}}async getTags(e,t,r,i){let o=(0,O.dQ)();try{let n=`query getTags(
	$owner: String!
	$repo: String!
	$tagQuery: String
	$cursor: String
	$limit: Int = 100
) {
	repository(owner: $owner, name: $repo) {
		refs(query: $tagQuery, refPrefix: "refs/tags/", first: $limit, after: $cursor, orderBy: { field: TAG_COMMIT_DATE, direction: DESC }) {
			pageInfo {
				endCursor
				hasNextPage
			}
			nodes {
				name
				target {
					oid
					...on Tag {
						message
						tagger { date }
						target {
					...on Commit {
								oid
						authoredDate
						committedDate
						message
					}
						}
					}
				}
			}
		}
	}
}`,s=await this.graphql(void 0,e,n,{owner:t,repo:r,tagQuery:i?.query,cursor:i?.cursor,limit:Math.min(100,i?.limit??100)},o);if(null==s)return Q;let a=s.repository?.refs;if(null==a)return Q;return{paging:{cursor:a.pageInfo.endCursor,more:a.pageInfo.hasNextPage},values:a.nodes}}catch(e){if(e instanceof D.g3)return Q;throw this.handleException(e,void 0,o)}}async resolveReference(e,t,r,i,o){let n=(0,O.dQ)();try{if(!o){let o=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			oid
		}
	}
}`,s=await this.graphql(void 0,e,o,{owner:t,repo:r,ref:i},n);return s?.repository?.object?.oid??void 0}let s=`query resolveReference(
	$owner: String!
	$repo: String!
	$ref: String!
	$path: String!
) {
	repository(owner: $owner, name: $repo) {
		object(expression: $ref) {
			... on Commit {
				history(first: 1, path: $path) {
					nodes { oid }
				}
			}
		}
	}
}`,a=await this.graphql(void 0,e,s,{owner:t,repo:r,ref:i,path:o},n);return a?.repository?.object?.history.nodes?.[0]?.oid??void 0}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,n)}}async searchCommits(e,t,r){let i,o,n;let s=(0,O.dQ)(),a=Math.min(100,r?.limit??100);r?.cursor!=null?([i,o,n]=r.cursor.split(" ",3),i=parseInt(i,10),o=parseInt(o,10),n=parseInt(n,10)):(i=1,o=a,n=0);try{let a=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:o,page:i},s),l=a?.data;if(null==l||0===l.items.length)return;let u=l.items.map(e=>({oid:e.sha,parents:{nodes:e.parents.map(e=>({oid:e.sha}))},message:e.commit.message,author:{avatarUrl:e.author?.avatar_url??void 0,date:e.commit.author?.date??e.commit.author?.date??new Date().toString(),email:e.author?.email??e.commit.author?.email??void 0,name:e.author?.name??e.commit.author?.name??""},committer:{date:e.commit.committer?.date??e.committer?.date??new Date().toString(),email:e.committer?.email??e.commit.committer?.email??void 0,name:e.committer?.name??e.commit.committer?.name??""}})),c=n+l.items.length,d=l.incomplete_results||l.total_count>c;return{pageInfo:{startCursor:`${i} ${o} ${n}`,endCursor:d?`${i+1} ${o} ${c}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:d},totalCount:l.total_count,values:u}}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,s)}}async searchCommitShas(e,t,r){let i,o,n;let s=(0,O.dQ)(),a=Math.min(100,r?.limit??100);r?.cursor!=null?([i,o,n]=r.cursor.split(" ",3),i=parseInt(i,10),o=parseInt(o,10),n=parseInt(n,10)):(i=1,o=a,n=0);try{let a=await this.request(void 0,e,"GET /search/commits",{q:t,sort:r?.sort,order:r?.order,per_page:o,page:i},s),l=a?.data;if(null==l||0===l.items.length)return;let u=n+l.items.length,c=l.incomplete_results||l.total_count>u;return{pageInfo:{startCursor:`${i} ${o} ${n}`,endCursor:c?`${i+1} ${o} ${u}`:void 0,hasPreviousPage:l.total_count>0&&i>1,hasNextPage:c},totalCount:l.total_count,values:l.items.map(e=>({sha:e.sha,authorDate:new Date(e.commit.author.date).getTime(),committerDate:new Date(e.commit.committer?.date??e.commit.author.date).getTime()}))}}catch(e){if(e instanceof D.g3)return;throw this.handleException(e,void 0,s)}}_enterpriseVersions=new Map;async getEnterpriseVersion(e,t,r){let i=this._enterpriseVersions.get(t);if(null!=i)return i;if(null===i)return;let o=(0,O.dQ)();try{let n=await this.request(e,t,"GET /meta",r,o),s=n?.data?.installed_version;i=s?(0,j.sH)(s):null}catch(e){i=null}return this._enterpriseVersions.set(t,i),i??void 0}async graphql(e,t,r,i,o,n){try{let o;if(null!=n){if(n.isCancellationRequested)throw new D.AL;o=new AbortController,n.onCancellationRequested(()=>o.abort()),i={...i,request:{...i?.request,signal:o.signal}}}return await (0,S.Ff)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,A)(r,i))}catch(r){if(r instanceof P){switch(r.errors?.[0]?.type){case"NOT_FOUND":throw new D.g3(r);case"FORBIDDEN":throw new D.v3("github",D.R.Forbidden,r);case"RATE_LIMITED":{let e;let i=r.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new D.qc(r,t,e)}}B.Vy.isDebugging&&G.window.showErrorMessage(`GitHub request failed: ${r.errors?.[0]?.message??r.message}`)}else r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,o):B.Vy.isDebugging&&G.window.showErrorMessage(`GitHub request failed: ${r.message}`);throw r}}async request(e,t,r,i,o,n){try{let o;if(null!=n){if(n.isCancellationRequested)throw new D.AL;o=new AbortController,n.onCancellationRequested(()=>o.abort()),i={...i,request:{...i?.request,signal:o.signal}}}return await (0,S.Ff)(e?.getIgnoreSSLErrors()??!1,()=>this.getDefaults(t,R)(r,i))}catch(r){throw r instanceof RequestError||"AbortError"===r.name?this.handleRequestError(e,t,r,o):B.Vy.isDebugging&&G.window.showErrorMessage(`GitHub request failed: ${r.message}`),r}}_defaults=new Map;getDefaults(e,t){let r=this._defaults.get(t);null==r&&(r=new Map,this._defaults.set(t,r));let i=r.get(e);return null==i&&(i=t.defaults({headers:{authorization:`token ${e}`},request:{agent:this.proxyAgent,fetch:I.HZ?(e,t)=>{if(null!=t.headers){let{"user-agent":e,...r}=t.headers;e&&(t.headers=r)}return(0,S.hd)(e,t)}:S.hd,hook:"debug"===B.Vy.logLevel||B.Vy.isDebugging?async(e,t)=>{let r=(0,T.u)(`[GITHUB] ${t.method} ${t.url}`,{log:!1});try{return await e(t)}finally{let e;try{if("string"==typeof t.query){let r=/(^[^({\n]+)/.exec(t.query);e=` ${r?.[1].trim()??t.query}`}}catch{}r?.stop({message:e})}}:void 0}}),r.set(e,i)),i}handleRequestError(e,t,r,i){if("AbortError"===r.name)throw new D.AL(r);switch(r.status){case 404:case 410:case 422:throw new D.g3(r);case 401:throw new D.v3("github",D.R.Unauthorized,r);case 403:if(r.message.includes("rate limit")){let e;let i=r.response?.headers?.["x-ratelimit-reset"];throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new D.qc(r,t,e)}throw new D.v3("github",D.R.Forbidden,r);case 500:B.Vy.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,k.wW)(`${e?.name??"GitHub"} failed to respond and might be experiencing issues.${null==e||"github"===e.id?" Please visit the [GitHub status page](https://githubstatus.com) for more information.":""}`));return;case 502:if(B.Vy.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,k.lW)(e?.name??"GitHub");return}break;default:if(r.status>=400&&r.status<500)throw new D.Iz(r)}B.Vy.error(r,i),B.Vy.isDebugging&&G.window.showErrorMessage(`GitHub request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return B.Vy.error(e,r),e instanceof D.v3&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===D.R.Unauthorized||e.reason===D.R.Forbidden){let r="Reauthenticate";await G.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===D.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t?.reauthenticate(),this.resetCaches(),this._onDidReauthenticate.fire())}else G.window.showErrorMessage(e.message)}async createEnterpriseAvatarUrl(e,t,r,i,o){o=o??16;let n=await this.getEnterpriseVersion(e,t,{baseUrl:r});if((0,j.ib)(n,">= 3.0.0")){let n;let s=(0,F.P)(i);null!=s&&G.Uri.parse(r).authority===s.authority&&(null!=s.userId?n=`${r}/enterprise/avatars/u/${encodeURIComponent(s.userId)}?s=${o}`:null!=s.login&&(n=`${r}/enterprise/avatars/${encodeURIComponent(s.login)}?s=${o}`)),null==n&&(n=`${r}/enterprise/avatars/u/e?email=${encodeURIComponent(i)}&s=${o}`);let a=await (0,S.Ff)(e?.getIgnoreSSLErrors()??!1,()=>(0,S.hd)(n,{method:"GET",headers:{Authorization:`Bearer ${t}`}}));if(a.ok){let e=(0,M.K3)(new Uint8Array(await a.arrayBuffer())),t=a.headers.get("content-type");return`data:${t};base64,${e}`}}return`https://avatars.githubusercontent.com/u/e?email=${encodeURIComponent(i)}&s=${o}`}async searchMyPullRequests(e,t,r,i){let o=(0,O.dQ)();try{let n=function(t,r){return{pullRequest:(0,L.fromGitHubPullRequestDetailed)(t,e),reasons:r?[r]:[]}},s=`query searchPullRequests(
	$authored: String!
	$assigned: String!
	$reviewRequested: String!
	$mentioned: String!
) {
	authored: search(first: 100, query: $authored, type: ISSUE) {
		nodes {
			...on PullRequest {
				${J}
			}
		}
	}
	assigned: search(first: 100, query: $assigned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${J}
			}
		}
	}
	reviewRequested: search(first: 100, query: $reviewRequested, type: ISSUE) {
		nodes {
			...on PullRequest {
				${J}
			}
		}
	}
	mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
		nodes {
			...on PullRequest {
				${J}
			}
		}
	}
}`,a=r?.search?.trim()??"";if(r?.user&&(a+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";a+=`${e}${r.repos.join(e)}`}let l="is:pr is:open archived:false",u=await this.graphql(e,t,s,{authored:`${a} ${l} author:@me`.trim(),assigned:`${a} ${l} assignee:@me`.trim(),reviewRequested:`${a} ${l} review-requested:@me`.trim(),mentioned:`${a} ${l} mentions:@me`.trim(),baseUrl:r?.baseUrl},o,i);if(void 0===u)return[];return ee([...u.assigned.nodes.map(e=>n(e,"assigned")),...u.reviewRequested.nodes.map(e=>n(e,"review-requested")),...u.mentioned.nodes.map(e=>n(e,"mentioned")),...u.authored.nodes.map(e=>n(e,"authored"))],e=>e.pullRequest.url)}catch(t){throw this.handleException(t,e,o)}}async searchMyIssues(e,t,r,i){let o=(0,O.dQ)(),n=`query searchIssues(
				$authored: String!
				$assigned: String!
				$mentioned: String!
			) {
				authored: search(first: 100, query: $authored, type: ISSUE) {
					nodes {
						... on Issue {
							${Z}
						}
					}
				}
				assigned: search(first: 100, query: $assigned, type: ISSUE) {
					nodes {
						... on Issue {
							${Z}
						}
					}
				}
				mentioned: search(first: 100, query: $mentioned, type: ISSUE) {
					nodes {
						... on Issue {
							${Z}
						}
					}
				}
			}`,s=r?.search?.trim()??"";if(r?.user&&(s+=` user:${r.user}`),r?.repos!=null&&r.repos.length>0){let e="  repo:";s+=`${e}${r.repos.join(e)}`}let a="type:issue is:open archived:false";try{let l=function(t,r){return{issue:(0,L.fromGitHubIssueDetailed)(t,e),reasons:r?[r]:[]}},u=await this.graphql(e,t,n,{authored:`${s} ${a} author:@me`.trim(),assigned:`${s} ${a} assignee:@me`.trim(),mentioned:`${s} ${a} mentions:@me`.trim(),baseUrl:r?.baseUrl},o,i);if(void 0===u)return[];return ee([...u.assigned.nodes.map(e=>l(e,"assigned")),...u.mentioned.nodes.map(e=>l(e,"mentioned")),...u.authored.nodes.map(e=>l(e,"authored"))],e=>e.issue.url)}catch(t){throw this.handleException(t,e,o)}}async mergePullRequest(e,t,r,i,o,n){let s;let a=(0,O.dQ)();switch(o?.mergeMethod){case E.e0.Merge:s="MERGE";break;case E.e0.Rebase:s="REBASE";break;case E.e0.Squash:s="SQUASH"}try{let l=`mutation mergePullRequest(
	$id: ID!
	$expectedSourceSha: GitObjectID!
	$mergeMethod: PullRequestMergeMethod
) {
	mergePullRequest(input: { pullRequestId: $id, expectedHeadOid: $expectedSourceSha, mergeMethod: $mergeMethod }) {
		pullRequest {
			id
		}
	}
}`,u=await this.graphql(e,t,l,{id:r,expectedSourceSha:i,mergeMethod:s,baseUrl:o?.baseUrl},a,n);return u?.pullRequest?.id===r}catch(t){throw this.handleException(t,e,a)}}};function X(e){return e?.baseUrl==null||"https://api.github.com"===e.baseUrl}function ee(e,t){return[...(0,H.pD)(e,t,(e,t)=>(0!==t.reasons.length&&e.reasons.push(...t.reasons),e))]}V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForCommit",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getAccountForEmail",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getDefaultBranch",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getIssueOrPullRequest",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForBranch",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getPullRequestForCommit",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"getRepositoryMetadata",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getBlame",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getBranches",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommit",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitForFile",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitBranches",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitCount",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitOnBranch",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommits",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitRefs",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCommitTags",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getNextCommitRefs",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getContributors",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getDefaultBranchName",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getCurrentUser",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getRepositoryVisibility",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"getTags",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"resolveReference",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommits",1),V([(0,_.Yz)({args:{0:"<token>"}})],GitHubApi.prototype,"searchCommitShas",1),V([(0,_.Yz)({args:{0:e=>e?.name,1:"<token>"}})],GitHubApi.prototype,"getEnterpriseVersion",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyPullRequests",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"searchMyIssues",1),V([(0,_.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitHubApi.prototype,"mergePullRequest",1)},1011:(e,t,r)=>{r.r(t),r.d(t,{GitHubGitProvider:()=>GitHubGitProvider});var i,o,n=r(1398),s=r(3574),a=r(3807),l=r(6580),u=r(8803),c=r(4703),d=r(1310),h=r(7931),p=r(9102),g=r(5287),m=r(5313),f=r(4693),y=r(5248),v=r(6645),w=r(7788),b=r(9634),R=r(7736),P=r(468),C=r(7205),$=r(968),q=r(3269),A=r(4832),G=r(8973),S=r(6950),I=r(6707),D=r(4026),E=r(3916),U=r(3446),F=r(4911),k=r(3131),x=r(4125),_=r(8489);async function H(e){try{let e=n.extensions.getExtension("ms-vscode.remote-repositories")??n.extensions.getExtension("GitHub.remotehub");if(null==e)throw E.Vy.log("GitHub Repositories extension is not installed or enabled"),new u.dU("GitHub Repositories","GitHub.remotehub");return e.isActive?e.exports:await e.activate()}catch(t){if(E.Vy.error(t,"Unable to get required api from the GitHub Repositories extension"),u.dU,e)return;throw t}}var B=((i=B||{})[i.Branch=0]="Branch",i[i.RemoteBranch=1]="RemoteBranch",i[i.Tag=2]="Tag",i[i.Commit=3]="Commit",i),O=((o=O||{})[o.Branch=0]="Branch",o[o.Tag=1]="Tag",o[o.Commit=2]="Commit",o[o.PullRequest=3]="PullRequest",o[o.Tree=4]="Tree",o),T=r(1116),M=Object.defineProperty,j=Object.getOwnPropertyDescriptor,L=(e,t,r,i)=>{for(var o,n=i>1?void 0:i?j(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&M(t,r,n),n};let z=/"/g,N=Object.freeze([]),V=Object.freeze({values:[]}),Q=Promise.resolve(void 0),Y=["repo","read:user","user:email"],W=/^[^/](?!.*\/\.)(?!.*\.\.)(?!.*\/\/)(?!.*@\{)[^\000-\037\177 ~^:?*[\\]+[^./]$/;let GitHubGitProvider=class GitHubGitProvider{constructor(e){this.container=e,this._disposables.push(this.container.events.on("git:cache:reset",e=>e.data.repoPath?this.resetCache(e.data.repoPath,...e.data.caches??N):this.resetCaches(...e.data.caches??N),n.authentication.onDidChangeSessions(this.onAuthenticationSessionsChanged,this)))}descriptor={id:"github",name:"GitHub",virtual:!0};supportedSchemes=new Set([a.xB.Virtual,a.xB.GitHub,a.xB.PRs]);_onDidChange=new n.EventEmitter;get onDidChange(){return this._onDidChange.event}_onDidChangeRepository=new n.EventEmitter;get onDidChangeRepository(){return this._onDidChangeRepository.event}_onDidCloseRepository=new n.EventEmitter;get onDidCloseRepository(){return this._onDidCloseRepository.event}_onDidOpenRepository=new n.EventEmitter;get onDidOpenRepository(){return this._onDidOpenRepository.event}_branchesCache=new Map;_repoInfoCache=new Map;_tagsCache=new Map;_disposables=[];dispose(){this._disposables.forEach(e=>void e.dispose())}onAuthenticationSessionsChanged(e){"github"===e.provider.id&&(this._sessionPromise=void 0,this.ensureSession(!1,!0))}onRepositoryChanged(e,t){this._branchesCache.delete(e.path),this._tagsCache.delete(e.path),this._repoInfoCache.delete(e.path),this._onDidChangeRepository.fire(t)}async discoverRepositories(e,t){if(!this.supportedSchemes.has(e.scheme))return[];try{let{remotehub:r}=await this.ensureRepositoryContext(e.toString(),!0),i=r.getVirtualWorkspaceUri(e);if(null==i)return[];return this.openRepository(void 0,i,!0,void 0,t?.silent)}catch(t){return t.message.startsWith("No provider registered with")&&(E.Vy.error(t,"No GitHub provider registered with Remote Repositories (yet); queuing pending discovery"),this._pendingDiscovery.add(e),this.ensurePendingRepositoryDiscovery()),[]}}_pendingDiscovery=new Set;_pendingTimer;ensurePendingRepositoryDiscovery(){null==this._pendingTimer&&0!==this._pendingDiscovery.size&&(this._pendingTimer=setTimeout(async()=>{try{let e=await H();for(let t of this._pendingDiscovery){if(null==e.getProvider(t)){this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery();return}this._pendingDiscovery.delete(t)}this._pendingTimer=void 0,setTimeout(()=>this._onDidChange.fire(),1),0!==this._pendingDiscovery.size&&this.ensurePendingRepositoryDiscovery()}catch{this._pendingTimer=void 0,this.ensurePendingRepositoryDiscovery()}},250))}updateContext(){(0,G.o)("gitlens:hasVirtualFolders",this.container.git.hasOpenRepositories(this.descriptor.id))}openRepository(e,t,r,i,o){return[new b.LN(this.container,this.onRepositoryChanged.bind(this),this.descriptor,e??n.workspace.getWorkspaceFolder(t),t,r,i??!n.window.state.focused,o)]}async supports(e){switch(e){case c.O.Stashes:case c.O.Worktrees:case c.O.StashOnlyStaged:return!1;default:return!0}}async visibility(e){let t=await this.getRemotes(e,{sort:!0});if(0===t.length)return["local",void 0];for await(let e of(0,k.w)(t.map(e=>this.getRemoteVisibility(e))))if("fulfilled"===e.status&&"public"===e.value[0])return["public",(0,w.U6)(e.value[1])];return["private",(0,w.U6)(t)]}async getRemoteVisibility(e){if(e.provider?.id==="github"){let{github:t,metadata:r,session:i}=await this.ensureRepositoryContext(e.repoPath);return[await t.getRepositoryVisibility(i.accessToken,r.repo.owner,r.repo.name)??"private",e]}return["private",e]}async getOpenScmRepositories(){return[]}async getScmRepository(e){}async getOrOpenScmRepository(e){}canHandlePathOrUri(e,t){if(this.supportedSchemes.has(e))return"string"==typeof t?t:t.toString()}getAbsoluteUri(e,t){if("string"==typeof t){if((0,F.bm)(t))t=n.Uri.parse(t,!0);else throw n.window.showErrorMessage(`Unable to get absolute uri between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e&&!(0,F.bm)(e)){let r=(0,F.Fd)(e);if(!(0,F.oP)(r))return n.Uri.joinPath(t,r)}let r=this.getRelativePath(e,t);return n.Uri.joinPath(t,r)}async getBestRevisionUri(e,t,r){return r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t)}getRelativePath(e,t){let r;if("string"==typeof t){if((0,F.bm)(t))t=n.Uri.parse(t,!0);else throw n.window.showErrorMessage(`Unable to get relative path between ${"string"==typeof e?e:e.toString(!0)} and ${t}; Base path '${t}' must be a uri`),Error(`Base path '${t}' must be a uri`)}if("string"==typeof e){if(!(0,F.bm)(e))return e=(0,F.Fd)(e),(r=(0,F.oP)(e)&&e.startsWith(t.path)?e.slice(t.path.length):e).charCodeAt(0)===a.s7.Slash&&(r=r.slice(1)),r;e=n.Uri.parse(e,!0)}return(0,F.Fd)((0,F.V8)(t.path.slice(1),e.path.slice(1)))}getRevisionUri(e,t,r){let i=this.createProviderUri(e,r,t);return r===m.nB?i.with({query:"~"}):i}async getWorkingUri(e,t){return this.createVirtualUri(e,void 0,t.path)}async addRemote(e,t,r,i){}async pruneRemote(e,t){}async removeRemote(e,t){}async applyChangesToWorkingFile(e,t,r){}async branchContainsCommit(e,t,r){return!1}async checkout(e,t,r){}resetCache(e,...t){(0===t.length||t.includes("branches"))&&this._branchesCache.delete(e),(0===t.length||t.includes("tags"))&&this._tagsCache.delete(e),0===t.length&&this._repoInfoCache.delete(e)}resetCaches(...e){(0===e.length||e.includes("branches"))&&this._branchesCache.clear(),(0===e.length||e.includes("tags"))&&this._tagsCache.clear(),0===e.length&&this._repoInfoCache.clear()}async excludeIgnoredUris(e,t){return t}async fetch(e,t){}async pull(e,t){}async push(e,t){}async findRepositoryUri(e,t){let r=(0,U.dQ)();try{return(await this.ensureRemoteHubApi()).getProviderRootUri(e).with({scheme:a.xB.Virtual})}catch(e){u.dU,E.Vy.error(e,r);return}}async getAheadBehindCommitCount(e,t,r){}async getBlame(e,t){let r=(0,U.dQ)();if(t?.isDirty)return;let i="blame";null!=e.sha&&(i+=`:${e.sha}`);let o=await this.container.documentTracker.getOrAdd(e);if(null!=o.state){let e=o.state.getBlame(i);if(null!=e)return E.Vy.debug(r,`Cache hit: '${i}'`),e.item}E.Vy.debug(r,`Cache miss: '${i}'`),null==o.state&&(o.state=new _.V);let n=this.getBlameCore(e,o,i,r);return null!=o.state&&(E.Vy.debug(r,`Cache add: '${i}'`),o.state.setBlame(i,{item:n})),n}async getBlameCore(e,t,r,i){try{let t=await this.ensureRepositoryContext(e.repoPath);if(null==t)return;let{metadata:r,github:i,remotehub:o,session:s}=t,l=o.getVirtualUri(o.getProviderRootUri(e)),u=this.getRelativePath(e,l);if(e.scheme===a.xB.Virtual){let[t,r]=await Promise.allSettled([n.workspace.fs.stat(e),n.workspace.fs.stat(e.with({scheme:a.xB.GitHub}))]);if("fulfilled"!==t.status||"fulfilled"!==r.status||t.value.mtime!==r.value.mtime)return}let c=e.sha&&"HEAD"!==e.sha?e.sha:(await r.getRevision()).revision,d=await i.getBlame(s.accessToken,r.repo.owner,r.repo.name,c,u),h=new Map,p=new Map,m=[];for(let t of d.ranges){let r=t.commit,{viewer:i=s.account.label}=d,o=null!=i&&r.author.name===i?"You":r.author.name,n=null!=i&&r.committer.name===i?"You":r.committer.name,a=h.get(o);null==a&&(a={name:o,lineCount:0},h.set(o,a)),a.lineCount+=t.endingLine-t.startingLine+1;let c=p.get(r.oid);null==c&&(c=new g.Yg(this.container,e.repoPath,r.oid,new g.M7(o,r.author.email,new Date(r.author.date),r.author.avatarUrl),new g.M7(n,r.committer.email,new Date(r.author.date)),r.message.split("\n",1)[0],r.parents.nodes[0]?.oid?[r.parents.nodes[0]?.oid]:[],r.message,new y.lY(l.toString(),u,y.NO.Modified),{changedFiles:r.changedFiles??0,additions:r.additions??0,deletions:r.deletions??0},[]),p.set(r.oid,c));for(let e=t.startingLine;e<=t.endingLine;e++){let t={sha:r.oid,originalLine:e,line:e};c.lines.push(t),m[e-1]=t}}let f=new Map([...h.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:e.repoPath,authors:f,commits:p,lines:m}}catch(e){if(null!=t.state&&!String(e).includes("No provider registered with")){let o=e?.toString()??"";return E.Vy.debug(i,`Cache replace (with empty promise): '${r}'`),t.state.setBlame(r,{item:Q,errorMessage:o}),t.setBlameFailure(e),Q}return}}async getBlameContents(e,t){}async getBlameForLine(e,t,r,i){let o=(0,U.dQ)();if(!r?.isDirty){if(!i?.forceSingleLine){let r=await this.getBlame(e);if(null==r)return;let i=r.lines[t];if(null==i){if(r.lines.length!==t)return;i=r.lines[t-1]}let o=r.commits.get(i.sha);if(null==o)return;return{author:{...r.authors.get(o.author.name),lineCount:o.lines.length},commit:o,line:i}}try{let r=await this.ensureRepositoryContext(e.repoPath);if(null==r)return;let{metadata:i,github:o,remotehub:n,session:s}=r,a=n.getVirtualUri(n.getProviderRootUri(e)),l=this.getRelativePath(e,a),u=e.sha&&"HEAD"!==e.sha?e.sha:(await i.getRevision()).revision,c=await o.getBlame(s.accessToken,i.repo.owner,i.repo.name,u,l),d=t+1,h=c.ranges.find(e=>e.startingLine===d);if(null==h)return;let p=h.commit,{viewer:m=s.account.label}=c,f=null!=m&&p.author.name===m?"You":p.author.name,v=null!=m&&p.committer.name===m?"You":p.committer.name,w=new g.Yg(this.container,e.repoPath,p.oid,new g.M7(f,p.author.email,new Date(p.author.date),p.author.avatarUrl),new g.M7(v,p.committer.email,new Date(p.author.date)),p.message.split("\n",1)[0],p.parents.nodes[0]?.oid?[p.parents.nodes[0]?.oid]:[],p.message,new y.lY(a.toString(),l,y.NO.Modified),{changedFiles:p.changedFiles??0,additions:p.additions??0,deletions:p.deletions??0},[]);for(let e=h.startingLine;e<=h.endingLine;e++){let t={sha:p.oid,originalLine:e,line:e};w.lines.push(t)}return{author:{name:f,lineCount:h.endingLine-h.startingLine+1},commit:w,line:{sha:p.oid,originalLine:h.startingLine,line:h.startingLine}}}catch(e){E.Vy.error(o,e);return}}}async getBlameForLineContents(e,t,r,i){}async getBlameForRange(e,t){let r=await this.getBlame(e);if(null!=r)return this.getBlameRange(r,e,t)}async getBlameForRangeContents(e,t,r){let i=await this.getBlameContents(e,r);if(null!=i)return this.getBlameRange(i,e,t)}getBlameRange(e,t,r){if(0===e.lines.length||0===r.start.line&&r.end.line===e.lines.length-1)return{allLines:e.lines,...e};let i=e.lines.slice(r.start.line,r.end.line+1),o=new Set(i.map(e=>e.sha)),n=r.start.line+1,s=r.end.line+1,a=new Map,l=new Map;for(let t of e.commits.values()){if(!o.has(t.sha))continue;let e=t.with({lines:t.lines.filter(e=>e.line>=n&&e.line<=s)});l.set(t.sha,e);let r=a.get(e.author.name);null==r&&(r={name:e.author.name,lineCount:0},a.set(r.name,r)),r.lineCount+=e.lines.length}let u=new Map([...a.entries()].sort((e,t)=>t[1].lineCount-e[1].lineCount));return{repoPath:t.repoPath,authors:u,commits:l,lines:i,allLines:e.lines}}async getBranch(e){let{values:[t]}=await this.getBranches(e,{filter:e=>e.current});return t}async getBranches(e,t){if(null==e)return V;let r=(0,U.dQ)(),i=t?.paging?.cursor?void 0:this._branchesCache.get(e);null==i&&(i=(async function(){try{let{metadata:r,github:i,session:o}=await this.ensureRepositoryContext(e),n=await r.getRevision(),s=0===n.type?n.name:void 0,a=[],l=t?.paging?.cursor,u=null==l;for(;;){let t=await i.getBranches(o.accessToken,r.repo.owner,r.repo.name,{cursor:l});for(let r of t.values){let t=new Date("author-date"===A.H.get("advanced.commitOrdering")?r.target.authoredDate:r.target.committedDate),i=r.target.oid;a.push(new p.Zr(this.container,e,r.name,!1,r.name===s,t,i,{name:`origin/${r.name}`,missing:!1}),new p.Zr(this.container,e,`origin/${r.name}`,!0,!1,t,i))}if(!t.paging?.more||!u)return{...t,values:a};l=t.paging.cursor}}catch(t){return E.Vy.error(t,r),this._branchesCache.delete(e),V}}).call(this),t?.paging?.cursor==null&&this._branchesCache.set(e,i));let o=await i;return t?.filter!=null&&(o={...o,values:o.values.filter(t.filter)}),t?.sort!=null&&(0,p.Xn)(o.values,"boolean"==typeof t.sort?void 0:t.sort),o}async getChangedFilesCount(e,t){if(!t)return;let r=await this.getCommit(e,t);if(r?.stats==null)return;let{stats:i}=r,o=(0,g.Zx)(i.changedFiles);return{additions:i.additions,deletions:i.deletions,changedFiles:o}}async getCommit(e,t){if(null==e)return;let r=(0,U.dQ)();try{let{metadata:r,github:i,session:o}=await this.ensureRepositoryContext(e),n=await i.getCommit(o.accessToken,r.repo.owner,r.repo.name,t);if(null==n)return;let{viewer:s=o.account.label}=n,a=null!=s&&n.author.name===s?"You":n.author.name,l=null!=s&&n.committer.name===s?"You":n.committer.name;return new g.Yg(this.container,e,n.oid,new g.M7(a,n.author.email,new Date(n.author.date),n.author.avatarUrl),new g.M7(l,n.committer.email,new Date(n.committer.date)),n.message.split("\n",1)[0],n.parents.nodes.map(e=>e.oid),n.message,n.files?.map(t=>new y.lY(e,t.filename??"",T.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0}))??[],{changedFiles:n.changedFiles??0,additions:n.additions??0,deletions:n.deletions??0},[])}catch(e){E.Vy.error(e,r);return}}async getCommitBranches(e,t,r,i){if(null==e||i?.commitDate==null)return[];let o=(0,U.dQ)();try{let{metadata:o,github:n,session:s}=await this.ensureRepositoryContext(e);return r?await n.getCommitOnBranch(s.accessToken,o.repo.owner,o.repo.name,r,t,i?.mode??"contains",i?.commitDate):await n.getCommitBranches(s.accessToken,o.repo.owner,o.repo.name,t,i?.mode??"contains",i?.commitDate)}catch(e){return E.Vy.error(e,o),[]}}async getCommitCount(e,t){if(null==e)return;let r=(0,U.dQ)();try{let{metadata:r,github:i,session:o}=await this.ensureRepositoryContext(e);return await i.getCommitCount(o?.accessToken,r.repo.owner,r.repo.name,t)}catch(e){E.Vy.error(e,r);return}}async getCommitForFile(e,t,r){if(null==e)return;let i=(0,U.dQ)();try{let{metadata:i,github:o,remotehub:n,session:s}=await this.ensureRepositoryContext(e),a=this.getRelativePath(t,n.getProviderRootUri(t)),l=r?.ref&&"HEAD"!==r.ref?r.ref:(await i.getRevision()).revision,u=await o.getCommitForFile(s.accessToken,i.repo.owner,i.repo.name,l,a);if(null==u)return;let{viewer:c=s.account.label}=u,d=null!=c&&u.author.name===c?"You":u.author.name,h=null!=c&&u.committer.name===c?"You":u.committer.name,p=u.files?.map(t=>new y.lY(e,t.filename??"",T.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),m=p?.find(e=>e.path===a);return new g.Yg(this.container,e,u.oid,new g.M7(d,u.author.email,new Date(u.author.date),u.author.avatarUrl),new g.M7(h,u.committer.email,new Date(u.committer.date)),u.message.split("\n",1)[0],u.parents.nodes.map(e=>e.oid),u.message,{file:m,files:p},{changedFiles:u.changedFiles??0,additions:u.additions??0,deletions:u.deletions??0},[])}catch(e){E.Vy.error(e,i);return}}async getCommitsForGraph(e,t,r){let i=r?.limit??A.H.get("graph.defaultItemLimit")??5e3,o=A.H.get("graph.commitOrdering",void 0,"date"),n=A.H.get("graph.avatars",void 0,!0),[s,a,l,u,c,d]=await Promise.allSettled([this.getLog(e,{all:!0,ordering:o,limit:i}),this.getBranch(e),this.getBranches(e,{filter:e=>e.remote}),this.getRemotes(e),this.getTags(e),this.getCurrentUser(e)]),h=new Map,p=(0,k.Ro)(a),g=new Map,m=new Map;null!=p&&(g.set(p.name,p),null!=p.sha&&m.set(p.sha,[p.name]));let f=k.Ro(l)?.values;if(null!=f)for(let e of f){if(g.set(e.name,e),null==e.sha)continue;let t=m.get(e.sha);null==t?m.set(e.sha,[e.name]):t.push(e.name)}let y=new Set,v=(0,k.Ro)(u)[0],w=null!=v?new Map([[v.name,v]]):new Map,b=new Map,R=k.Ro(c)?.values;if(null!=R)for(let e of R){if(null==e.sha)continue;let t=b.get(e.sha);null==t?b.set(e.sha,[e.name]):t.push(e.name)}return this.getCommitsForGraphCore(e,t,(0,k.Ro)(s),p,g,m,v,w,b,(0,k.Ro)(d),h,y,{...r,useAvatars:n})}async getCommitsForGraphCore(e,t,r,i,o,n,s,a,u,c,d,h,m){let f,y,b,R,C,$,q,A,G,S;let I={...m?.include,stats:!0},E=new Map;if(null==r)return{repoPath:e,avatars:d,ids:h,includes:I,branches:o,remotes:a,downstreams:E,rows:[]};let U=(r.pagedCommits?.()??r.commits)?.values();if(null==U)return{repoPath:e,avatars:d,ids:h,includes:I,branches:o,remotes:a,downstreams:E,rows:[]};let F=[],k=!1,_=!1,H=i.upstream?.name;for(let r of U){if(h.add(r.sha),k=r.sha===i.sha){if(b={webviewItem:`gitlens:branch${k?"+current":""}${i?.upstream!=null?"+tracking":""}`,webviewItemValue:{type:"branch",ref:(0,v.kA)(i.name,e,{id:i.id,refType:"branch",name:i.name,remote:!1,upstream:i.upstream})}},C=[{id:i.id,name:i.name,isCurrentHead:!0,context:(0,x.C9)(b),upstream:null!=i.upstream?{name:i.upstream.name,id:(0,p.Yk)(e,!0,i.upstream.name)}:void 0}],null!=i.upstream){if(A=(0,p.Yk)(e,!0,i.name),f=((m?.useAvatars?s.provider?.avatarUri:void 0)??w.Wf(this.container,s,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,v.kA)(i.name,e,{id:A,refType:"branch",name:i.name,remote:!0,upstream:{name:s.name,missing:!1}})}},$=[{id:A,name:i.name,owner:s.name,url:s.url,avatarUrl:f,context:(0,x.C9)(b),current:!0,hostingServiceType:s.provider?.id}],null!=H){let e=E.get(H);null==e&&(e=[],E.set(H,e)),e.push(i.name)}}else $=[]}else{C=[],$=[];let i=n.get(r.sha);if(null!=i)for(let r of i)A=(0,p.Yk)(e,!0,r),y=(0,p.km)(r),f=((m?.useAvatars?s.provider?.avatarUri:void 0)??w.Wf(this.container,s,t))?.toString(!0),b={webviewItem:"gitlens:branch+remote",webviewItemValue:{type:"branch",ref:(0,v.kA)(r,e,{id:A,refType:"branch",name:r,remote:!0,upstream:{name:s.name,missing:!1}})}},$.push({id:A,name:y,owner:s.name,url:s.url,avatarUrl:f,context:(0,x.C9)(b),hostingServiceType:s.provider?.id})}q=[];let o=u.get(r.sha);if(null!=o)for(let t of o)S=(0,P.gt)(e,t),b={webviewItem:"gitlens:tag",webviewItemValue:{type:"tag",ref:(0,v.kA)(t,e,{id:S,refType:"tag",name:t})}},q.push({id:S,name:t,annotated:!0,context:(0,x.C9)(b)});if(r.author.email&&!d.has(r.author.email)){let e=r.getCachedAvatarUri();null!=e&&d.set(r.author.email,e.toString(!0))}_="You"===r.author.name,R={row:(0,x.C9)({webviewItem:`gitlens:commit${k?"+HEAD":""}+current`,webviewItemValue:{type:"commit",ref:(0,v.kA)(r.sha,e,{refType:"revision",message:r.message})}}),avatar:(0,x.C9)({webviewItem:`gitlens:contributor${_?"+current":""}`,webviewItemValue:{type:"contributor",repoPath:e,name:_&&c?.name!=null?c.name:r.author.name,email:r.author.email,current:_}})},F.push({sha:r.sha,parents:r.parents,author:r.author.name,email:r.author.email??"",date:r.committer.date.getTime(),message:(0,l.E)(r.message&&String(r.message).length?r.message:r.summary),type:r.parents.length>1?"merge-node":"commit-node",heads:C,remotes:$,tags:q,contexts:R}),null!=r.stats&&(null==G&&(G=new Map),G.set(r.sha,{files:(0,g.Zx)(r.stats.changedFiles),additions:r.stats.additions,deletions:r.stats.deletions}))}return m?.ref==="HEAD"?m.ref=D.$1(r.commits.values())?.sha:m?.ref!=null&&(m.ref=void 0),{repoPath:e,avatars:d,ids:h,includes:I,branches:o,remotes:a,downstreams:E,rows:F,id:m?.ref,paging:{limit:r.limit,startingCursor:r.startingCursor,hasMore:r.hasMore},more:async l=>{let p=await r.more?.(l);return this.getCommitsForGraphCore(e,t,p,i,o,n,s,a,u,c,d,h,m)}}}async getCommitTags(e,t,r){if(null==e||r?.commitDate==null)return[];let i=(0,U.dQ)();try{let{metadata:i,github:o,session:n}=await this.ensureRepositoryContext(e);return await o.getCommitTags(n.accessToken,i.repo.owner,i.repo.name,t,r?.commitDate)}catch(e){return E.Vy.error(e,i),[]}}async getContributors(e,t){if(null==e)return[];let r=(0,U.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e),o=await r.getContributors(i.accessToken,t.repo.owner,t.repo.name),n=await this.getCurrentUser(e),s=[];for(let t of o)"User"===t.type&&s.push(new f.sL(e,t.name,t.email,t.contributions,void 0,(0,C.h)(n,t.name,t.email,t.login),void 0,t.login,t.avatar_url,t.node_id));return s}catch(e){return E.Vy.error(e,r),[]}}async getCurrentUser(e){if(!e)return;let t=(0,U.dQ)(),r=this._repoInfoCache.get(e),i=r?.user;if(null!=i)return i;if(null!==i)try{let{metadata:t,github:o,session:n}=await this.ensureRepositoryContext(e);return i=await o.getCurrentUser(n.accessToken,t.repo.owner,t.repo.name),this._repoInfoCache.set(e,{...r,user:i??null}),i}catch(i){E.Vy.error(i,t),this._repoInfoCache.set(e,{...r,user:null});return}}async getDefaultBranchName(e,t){if(null==e)return;let r=(0,U.dQ)();try{let{metadata:t,github:r,session:i}=await this.ensureRepositoryContext(e);return await r.getDefaultBranchName(i.accessToken,t.repo.owner,t.repo.name)}catch(e){E.Vy.error(e,r);return}}async getDiffForFile(e,t,r){}async getDiffForFileContents(e,t,r){}async getDiffForLine(e,t,r,i){}async getDiffStatus(e,t,r,i){}async getFileStatusForCommit(e,t,r){if(r===m.nB||(0,v._k)(r))return;let i=await this.getCommitForFile(e,t,{ref:r});if(null!=i)return i.findFile(t)}async getLastFetchedTimestamp(e){}async getLog(e,t){if(null==e)return;let r=(0,U.dQ)(),i=this.getPagingLimit(t?.limit);try{let{metadata:r,github:o,session:n}=await this.ensureRepositoryContext(e),s=t?.ref&&"HEAD"!==t.ref?t.ref:(await r.getRevision()).revision,a=await o.getCommits(n.accessToken,r.repo.owner,r.repo.name,s,{all:t?.all,authors:t?.authors,after:t?.cursor,limit:i,since:t?.since?new Date(t.since):void 0}),l=new Map,{viewer:u=n.account.label}=a;for(let t of a.values){let r=null!=u&&t.author.name===u?"You":t.author.name,i=null!=u&&t.committer.name===u?"You":t.committer.name,o=l.get(t.oid);null==o&&(o=new g.Yg(this.container,e,t.oid,new g.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new g.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.lY(e,t.filename??"",T.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),l.set(t.oid,o))}let c={repoPath:e,commits:l,sha:s,range:void 0,count:l.size,limit:i,hasMore:a.paging?.more??!1,endingCursor:a.paging?.cursor,query:r=>this.getLog(e,{...t,limit:r})};return c.hasMore&&(c.more=this.getLogMoreFn(c,t)),c}catch(e){E.Vy.error(e,r);return}}async getLogRefsOnly(e,t){let r=await this.getLog(e,t);if(null!=r)return new Set([...r.commits.values()].map(e=>e.ref))}getLogMoreFn(e,t){return async r=>{let i=null!=r&&"object"==typeof r?r.until:void 0,o="number"==typeof r?r:void 0;if(i&&(0,D.zN)(e.commits.values(),e=>e.ref===i))return e;o=this.getPagingLimit(o);let n=await this.getLog(e.repoPath,{...t,limit:o,cursor:e.endingCursor});if(null==n)return{...e,hasMore:!1,more:void 0};let s=new Map([...e.commits,...n.commits]),a={repoPath:e.repoPath,commits:s,sha:e.sha,range:void 0,count:s.size,limit:null==i?(e.limit??0)+o:void 0,hasMore:null!=i||n.hasMore,startingCursor:D.HV(e.commits)?.[0],endingCursor:n.endingCursor,pagedCommits:()=>{for(let t of e.commits.keys())n.commits.delete(t);return n.commits},query:e.query};return a.hasMore&&(a.more=this.getLogMoreFn(a,t)),a}}async getLogForFile(e,t,r){if(null==e)return;let i=(0,U.dQ)(),o=this.getRelativePath(t,e);if(null!=e&&e===o)throw Error(`File name cannot match the repository path; path=${o}`);(r={reverse:!1,...r}).renames=!1,r.all=!1;let n="log";null!=r.ref&&(n+=`:${r.ref}`),r.limit=this.getPagingLimit(r?.limit),r.limit&&(n+=`:n${r.limit}`),r.renames&&(n+=":follow"),r.reverse&&(n+=":reverse"),r.since&&(n+=`:since=${r.since}`),r.skip&&(n+=`:skip${r.skip}`),r.cursor&&(n+=`:cursor=${r.cursor}`);let s=await this.container.documentTracker.getOrAdd(h.nk.fromFile(o,e,r.ref));if(!r.force&&null==r.range){if(null!=s.state){let o=s.state.getLog(n);if(null!=o)return E.Vy.debug(i,`Cache hit: '${n}'`),o.item;if(null!=r.ref||null!=r.limit){let o=s.state.getLog(`log${r.renames?":follow":""}${r.reverse?":reverse":""}`);if(null!=o){if(null==r.ref)return E.Vy.debug(i,`Cache hit: ~'${n}'`),o.item;E.Vy.debug(i,`Cache ?: '${n}'`);let s=await o.item;if(null!=s&&!s.hasMore&&s.commits.has(r.ref)){E.Vy.debug(i,`Cache hit: '${n}'`);let o=!0,a=0,l=new Map((0,D.x1)(s.commits.entries(),([e,t])=>{if(o){if(e!==r?.ref)return;o=!1}if(a++,r?.limit==null||!(a>r.limit))return[e,t]})),u={...r};return{...s,limit:r.limit,count:l.size,commits:l,query:r=>this.getLogForFile(e,t,{...u,limit:r})}}}}}E.Vy.debug(i,`Cache miss: '${n}'`),null==s.state&&(s.state=new _.V)}let a=this.getLogForFileCore(e,o,s,n,i,r);return null!=s.state&&null==r.range&&(E.Vy.debug(i,`Cache add: '${n}'`),s.state.setLog(n,{item:a})),a}async getLogForFileCore(e,t,r,i,o,n){if(null==e)return;let s=this.getPagingLimit(n?.limit);try{let r=await this.ensureRepositoryContext(e);if(null==r)return;let{metadata:i,github:o,remotehub:a,session:l}=r,u=this.getAbsoluteUri(t,e),c=this.getRelativePath(u,a.getProviderRootUri(u)),d=n?.ref&&"HEAD"!==n.ref?n.ref:(await i.getRevision()).revision,h=await o.getCommits(l.accessToken,i.repo.owner,i.repo.name,d,{all:n?.all,after:n?.cursor,path:c,limit:s,since:n?.since?new Date(n.since):void 0}),p=new Map,{viewer:m=l.account.label}=h;for(let t of h.values){let r=null!=m&&t.author.name===m?"You":t.author.name,i=null!=m&&t.committer.name===m?"You":t.committer.name,o=p.get(t.oid);if(null==o){let n=t.files?.map(t=>new y.lY(e,t.filename??"",T.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),s=(0,F.Np)(c)?void 0:n?.find(e=>e.path===c)??new y.lY(e,c,y.NO.Modified,void 0,void 0,1===t.changedFiles?{additions:t.additions??0,deletions:t.deletions??0,changes:0}:void 0);o=new g.Yg(this.container,e,t.oid,new g.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new g.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,{file:s,files:n},{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),p.set(t.oid,o)}}let f={repoPath:e,commits:p,sha:d,range:void 0,count:p.size,limit:s,hasMore:h.paging?.more??!1,endingCursor:h.paging?.cursor,query:r=>this.getLogForFile(e,t,{...n,limit:r})};return f.hasMore&&(f.more=this.getLogForFileMoreFn(f,t,n)),f}catch(e){if(null!=r.state&&n?.range==null&&!n?.reverse){let t=e?.toString()??"";return E.Vy.debug(o,`Cache replace (with empty promise): '${i}'`),r.state.setLog(i,{item:Q,errorMessage:t}),Q}return}}getLogForFileMoreFn(e,t,r){return async i=>{let o=null!=i&&"object"==typeof i?i.until:void 0,n="number"==typeof i?i:void 0;if(o&&(0,D.zN)(e.commits.values(),e=>e.ref===o))return e;n=this.getPagingLimit(n);let s=await this.getLogForFile(e.repoPath,t,{...r,limit:null==o?n:0,cursor:e.endingCursor});if(null==s)return{...e,hasMore:!1,more:void 0};let a=new Map([...e.commits,...s.commits]),l={repoPath:e.repoPath,commits:a,sha:e.sha,range:e.range,count:a.size,limit:null==o?(e.limit??0)+n:void 0,hasMore:null!=o||s.hasMore,endingCursor:s.endingCursor,query:e.query};return l.hasMore&&(l.more=this.getLogForFileMoreFn(l,t,r)),l}}async getMergeBase(e,t,r,i){}async getMergeStatus(e){}async getRebaseStatus(e){}async getNextComparisonUris(e,t,r,i=0){if(!r)return;let o=(0,U.dQ)();try{let o=await this.ensureRepositoryContext(e);if(null==o)return;let{metadata:n,github:s,remotehub:a,session:l}=o,u=this.getRelativePath(t,a.getProviderRootUri(t)),c=(await n.getRevision()).revision;"HEAD"===r&&(r=c);let d=await s.getNextCommitRefs(l.accessToken,n.repo.owner,n.repo.name,c,u,r);return{current:0===i?h.nk.fromFile(u,e,r):new h.nk(await this.getBestRevisionUri(e,u,d[i-1])),next:new h.nk(await this.getBestRevisionUri(e,u,d[i]))}}catch(e){throw E.Vy.error(e,o),e}}async getOldestUnpushedRefForFile(e,t){}async getPreviousComparisonUris(e,t,r,i=0){if(r===m.nB)return;let o=(0,U.dQ)();r===m.SU&&(r=void 0);try{let o=await this.ensureRepositoryContext(e);if(null==o)return;let{metadata:n,github:s,remotehub:a,session:l}=o,u=this.getRelativePath(t,a.getProviderRootUri(t)),c=null!=r?1:0,d=await s.getCommitRefs(l.accessToken,n.repo.owner,n.repo.name,r&&"HEAD"!==r?r:(await n.getRevision()).revision,{path:u,first:c+i+1});if(null==d)return;let p=0===i?h.nk.fromFile(u,e,r):new h.nk(await this.getBestRevisionUri(e,u,d.values[c+i-1]?.oid??m.nB));if(null==p||p.sha===m.nB)return;return{current:p,previous:new h.nk(await this.getBestRevisionUri(e,u,d.values[c+i]?.oid??m.nB))}}catch(e){throw E.Vy.error(e,o),e}}async getPreviousComparisonUrisForLine(e,t,r,i,o=0){if(i===m.nB)return;let n=(0,U.dQ)();try{let n;let s=await this.ensureRepositoryContext(e);if(null==s)return;let{remotehub:a}=s,l=this.getRelativePath(t,a.getProviderRootUri(t)),u=h.nk.fromFile(l,e,i),c=r,d=r,p=r;for(let t=0;t<Math.max(0,o)+2;t++){let t=await this.getBlameForLine(n??u,p,void 0,{forceSingleLine:!0});if(null==t)break;i=t.commit.sha,l=t.commit.file?.path??t.commit.file?.originalPath??l,p=t.line.originalLine-1;let r=h.nk.fromFile(l,e,i);null==n||(u=n,c=d),n=r,d=p}if(null==u)return;return{current:u,previous:n,line:(c??r)+1}}catch(e){throw E.Vy.error(e,n),e}}async getIncomingActivity(e,t){}async getRemotes(e,t){if(null==e)return[];let r=(0,$.P)(A.H.get("remotes",null)),[,i,o]=n.Uri.parse(e,!0).path.split("/",3),s=`https://github.com/${i}/${o}.git`,a="github.com",l=`${i}/${o}`;return[new w.Xd(this.container,e,"origin","https",a,l,(0,$.m)(this.container,r)(s,a,l),[{type:"fetch",url:s},{type:"push",url:s}])]}async getRevisionContent(e,t,r){let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t);return n.workspace.fs.readFile(i)}async getStash(e){}async getStatusForFile(e,t){}async getStatusForFiles(e,t){}async getStatusForRepo(e){if(null==e)return;let t=await this.ensureRepositoryContext(e);if(null==t)return;let r=await t.metadata.getRevision();if(null!=r)return new R.ls(e,r.name,r.revision,[],{ahead:0,behind:0},r.type===B.Branch||r.type===B.RemoteBranch?{name:`origin/${r.name}`,missing:!1}:void 0)}async getTags(e,t){if(null==e)return V;let r=(0,U.dQ)(),i=t?.paging?.cursor?void 0:this._tagsCache.get(e);null==i&&(i=(async function(){try{let r,i;let{metadata:o,github:n,session:s}=await this.ensureRepositoryContext(e),a=[],l=t?.paging?.cursor,u=null==l;for(;;){let t=await n.getTags(s.accessToken,o.repo.owner,o.repo.name,{cursor:l});for(let o of t.values)r=o.target.authoredDate??o.target.target?.authoredDate??o.target.tagger?.date,i=o.target.committedDate??o.target.target?.committedDate??o.target.tagger?.date,a.push(new P.rN(e,o.name,o.target.target?.oid??o.target.oid,o.target.message??o.target.target?.message??"",null!=r?new Date(r):void 0,null!=i?new Date(i):void 0));if(!t.paging?.more||!u)return{...t,values:a};l=t.paging.cursor}}catch(t){return E.Vy.error(t,r),this._tagsCache.delete(e),V}}).call(this),t?.paging?.cursor==null&&this._tagsCache.set(e,i));let o=await i;return t?.filter!=null&&(o={...o,values:o.values.filter(t.filter)}),t?.sort!=null&&(0,P.uO)(o.values,"boolean"==typeof t.sort?void 0:t.sort),o}async getTreeEntryForRevision(e,t,r){if(null==e||!t)return;if("HEAD"===r){let t=await this.ensureRepositoryContext(e);if(null==t)return;let i=await t.metadata.getRevision();r=i?.revision}let i=r?this.createProviderUri(e,r,t):this.createVirtualUri(e,r,t),o=await n.workspace.fs.stat(i);if(null!=o)return{ref:r,oid:"",path:this.getRelativePath(i,e),size:o.size,type:(o.type&n.FileType.Directory)===n.FileType.Directory?"tree":"blob"}}async getTreeForRevision(e,t){if(null==e)return[];if("HEAD"===t){let r=await this.ensureRepositoryContext(e);if(null==r)return[];let i=await r.metadata.getRevision();t=i?.revision}let r=t?this.createProviderUri(e,t):this.createVirtualUri(e,t),i=await n.workspace.fs.readDirectory(r);if(null==i)return[];let o=[];for(let[e,s]of i){let i=this.getAbsoluteUri(e,r);o.push({ref:t,oid:"",path:this.getRelativePath(e,i),size:0,type:(s&n.FileType.Directory)===n.FileType.Directory?"tree":"blob"})}return[]}async hasBranchOrTag(e,t){let[{values:r},{values:i}]=await Promise.all([this.getBranches(e,{filter:t?.filter?.branches,sort:!1}),this.getTags(e,{filter:t?.filter?.tags,sort:!1})]);return 0!==r.length||0!==i.length}async hasCommitBeenPushed(e,t){return!0}isTrackable(e){return this.supportedSchemes.has(e.scheme)}async isTracked(e){if(!this.isTrackable(e)||null==this.container.git.getRepository(e))return!1;let t=e.with({scheme:a.xB.GitHub});return null!=await n.workspace.fs.stat(t)}async getDiffTool(e){}async openDiffTool(e,t,r){}async openDirectoryCompare(e,t,r,i){}async resolveReference(e,t,r,i){let o;if(!t||t===m.nB||null==r&&(0,v.HH)(t)||null!=r&&(0,v._k)(t))return t;if(null!=r)o=this.getRelativePath(r,e);else if(!(0,v.a$)(t)||t.endsWith("^3"))return t;let n=await this.ensureRepositoryContext(e);if(null==n)return t;let{metadata:s,github:a,session:l}=n,u=await a.resolveReference(l.accessToken,s.repo.owner,s.repo.name,t,o);return null!=u?u:o?m.nB:t}async richSearchCommits(e,t,r){if(null==e)return;let i=(0,U.dQ)(),o=(0,q.OM)(t),n=o.get("commit:");if(n?.size){let t=await this.getCommit(e,(0,D.$1)(n));if(null==t)return;return{repoPath:e,commits:new Map([[t.sha,t]]),sha:t.sha,range:void 0,count:1,limit:1,hasMore:!1}}let s=await this.getQueryArgsFromSearchQuery(t,o,e);if(0===s.length)return;let a=this.getPagingLimit(r?.limit);try{let{metadata:i,github:o,session:n}=await this.ensureRepositoryContext(e),l=`repo:${i.repo.owner}/${i.repo.name}+${s.join("+").trim()}`,u=await o.searchCommits(n.accessToken,l,{cursor:r?.cursor,limit:a,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==u)return;let c=new Map,d=n.account.label;for(let t of u.values){let r=null!=d&&t.author.name===d?"You":t.author.name,i=null!=d&&t.committer.name===d?"You":t.committer.name,o=c.get(t.oid);null==o&&(o=new g.Yg(this.container,e,t.oid,new g.M7(r,t.author.email,new Date(t.author.date),t.author.avatarUrl),new g.M7(i,t.committer.email,new Date(t.committer.date)),t.message.split("\n",1)[0],t.parents.nodes.map(e=>e.oid),t.message,t.files?.map(t=>new y.lY(e,t.filename??"",T.fromCommitFileStatus(t.status)??y.NO.Modified,t.previous_filename,void 0,{additions:t.additions??0,deletions:t.deletions??0,changes:t.changes??0})),{changedFiles:t.changedFiles??0,additions:t.additions??0,deletions:t.deletions??0},[]),c.set(t.oid,o))}let h={repoPath:e,commits:c,sha:void 0,range:void 0,count:c.size,limit:a,hasMore:u.pageInfo?.hasNextPage??!1,endingCursor:u.pageInfo?.endCursor??void 0,query:t=>this.getLog(e,{...r,limit:t})};if(h.hasMore){let e=function(i){return async o=>{o=this.getPagingLimit(o);let n=await this.richSearchCommits(i.repoPath,t,{...r,limit:o,cursor:i.endingCursor});if(null==n)return{...i,hasMore:!1,more:void 0};let s=new Map([...i.commits,...n.commits]),a={repoPath:i.repoPath,commits:s,sha:i.sha,range:void 0,count:s.size,limit:(i.limit??0)+o,hasMore:n.hasMore,endingCursor:n.endingCursor,query:i.query};return a.hasMore&&(a.more=e.call(this,a)),a}};h.more=e.call(this,h)}return h}catch(e){E.Vy.error(e,i)}}async searchCommits(e,t,r){t={matchAll:!1,matchCase:!1,matchRegex:!0,...t};let i=(0,q.b4)(t);try{let n=new Map,s=(0,q.OM)(t),a=s.get("commit:");if(null!=a){let o=await Promise.allSettled((0,D.Tj)(a,t=>this.getCommit(e,t.replace(z,"")))),s=0;for(let e of o){let t=(0,k.Ro)(e);null!=t&&n.set(t.sha,{i:s++,date:Number(r?.ordering==="author-date"?t.author.date:t.committer.date)})}return{repoPath:e,query:t,comparisonKey:i,results:n}}let l=await this.getQueryArgsFromSearchQuery(t,s,e);if(0===l.length)return{repoPath:e,query:t,comparisonKey:i,results:n};let{metadata:u,github:c,session:d}=await this.ensureRepositoryContext(e),h=`repo:${u.repo.owner}/${u.repo.name}+${l.join("+").trim()}`;async function o(s,a){if(r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:n};s=this.getPagingLimit(s??A.H.get("advanced.maxSearchItems"));let l=await c.searchCommitShas(d.accessToken,h,{cursor:a,limit:s,sort:r?.ordering==="date"?"committer-date":r?.ordering==="author-date"?"author-date":void 0});if(null==l||r?.cancellation?.isCancellationRequested)return{repoPath:e,query:t,comparisonKey:i,results:n};for(let e of l.values)n.set(e.sha,{i:n.size,date:Number(r?.ordering==="author-date"?e.authorDate:e.committerDate)});return a=l.pageInfo?.endCursor??void 0,{repoPath:e,query:t,comparisonKey:i,results:n,paging:l.pageInfo?.hasNextPage?{limit:s,hasMore:!0}:void 0,more:async e=>o.call(this,e,a)}}return o.call(this,r?.limit)}catch(e){if(e instanceof d.Do)throw e;throw new d.Do(e)}}async validateBranchOrTagName(e,t){return W.test(e)}async validateReference(e,t){return!0}async stageFile(e,t){}async stageDirectory(e,t){}async unstageFile(e,t){}async unstageDirectory(e,t){}async ensureRepositoryContext(e,t){let r,i,o=n.Uri.parse(e,!0);if(!/^github\+?/.test(o.authority))throw new u.gK(e,u.ax.NotAGitHubRepository);if(!t){let t=this.container.git.getRepository(o);if(null==t)throw new u.gK(e,u.ax.NotAGitHubRepository);o=t.uri}let s=this._remotehub;if(null==s)try{s=await this.ensureRemoteHubApi()}catch(t){throw u.dU,new u.gK(e,u.ax.RemoteHubApiNotFound,t)}let a=await s?.getMetadata(o);if(a?.provider.id!=="github")throw new u.gK(e,u.ax.NotAGitHubRepository);try{[r,i]=await Promise.all([this.ensureGitHub(),this.ensureSession()])}catch(t){if(t instanceof u.v3)throw new u.gK(e,t.reason===u.R.UserDidNotConsent?u.ax.GitHubAuthenticationDenied:u.ax.GitHubAuthenticationNotFound,t);throw new u.gK(e)}if(null==r)throw new u.gK(e);return{github:r,metadata:a,remotehub:s,session:i}}_github;async ensureGitHub(){if(null==this._github){let e=await this.container.github;null!=e&&this._disposables.push(e.onDidReauthenticate(()=>void this.ensureSession(!0))),this._github=e}return this._github}_remotehub;_remotehubPromise;async ensureRemoteHubApi(e){if(null==this._remotehubPromise&&(this._remotehubPromise=H(),this._remotehubPromise.then(e=>this._remotehub=e,()=>this._remotehub=void 0)),!e)return this._remotehubPromise;try{return await this._remotehubPromise}catch{return}}_sessionPromise;async ensureSession(e=!1,t=!1){if(e||null==this._sessionPromise){async function r(){let i=this.container.storage.get(`provider:authentication:skip:${this.descriptor.id}`,!1);try{if(e)return i=!1,this.container.storage.delete(`provider:authentication:skip:${this.descriptor.id}`),await n.authentication.getSession("github",Y,{forceNewSession:!0});if(!i&&!t)return await n.authentication.getSession("github",Y,{createIfNone:!0});let r=await n.authentication.getSession("github",Y,{createIfNone:!1,silent:t});if(null!=r)return r;throw Error("User did not consent")}catch(o){if(o instanceof Error&&o.message.includes("User did not consent")){if(!t&&(await this.container.storage.store(`provider:authentication:skip:${this.descriptor.id}`,!0),!i))return e||queueMicrotask(async()=>{let e="Re-enable";await n.window.showInformationMessage("GitLens has been disabled. Authentication is required for GitLens to work with remote GitHub repositories.",e)===e&&this.ensureSession(!0)}),e=!1,r.call(this);throw new u.v3("github",u.R.UserDidNotConsent)}throw E.Vy.error(o),new u.v3("github",void 0,o)}}this._sessionPromise=r.call(this)}return this._sessionPromise}createVirtualUri(e,t,r){var i;let o;if("string"==typeof t)t&&(o=(0,v.HH)(t)?{v:1,ref:{id:t,type:2}}:{v:1,ref:{id:t,type:4}});else switch(t?.refType){case"revision":case"stash":o={v:1,ref:{id:t.ref,type:2}};break;case"branch":case"tag":o={v:1,ref:{id:t.name,type:4}}}if("string"==typeof e&&(e=n.Uri.parse(e,!0)),r){let t=e.path;t.endsWith("/")&&(t=t.slice(0,-1)),r=this.getRelativePath(r,e),r=`${t}/${r.startsWith("/")?r.slice(0,-1):r}`}return e.with({scheme:a.xB.Virtual,authority:(i=o,`github${null!=i?`+${(0,s.l)(JSON.stringify(i))}`:""}`),path:r??e.path})}createProviderUri(e,t,r){let i=this.createVirtualUri(e,t,r);return null==this._remotehub?i.scheme!==a.xB.Virtual?i:i.with({scheme:a.xB.GitHub}):this._remotehub.getProviderUri(i)}getPagingLimit(e){return 0===(e=Math.min(100,e??A.H.get("advanced.maxListItems")??100))&&(e=100),e}async resolveReferenceCore(e,t,r){if(null==r||"HEAD"===r)return(await t.getRevision()).revision;if((0,v.HH)(r))return r;if((0,v.p8)(r))return;let[i,o]=await Promise.allSettled([this.getBranches(e,{filter:e=>e.name===r}),this.getTags(e,{filter:e=>e.name===r})]);return r=k.Ro(i)?.values[0]?.sha??k.Ro(o)?.values[0]?.sha}async getQueryArgsFromSearchQuery(e,t,r){let i=[];for(let[o,n]of t.entries())switch(o){case"message:":i.push(...(0,D.Tj)(n,e=>e.replace(/ /g,"+")));break;case"author:":{let t;for(let o of(n.has("@me")&&(t=await this.getCurrentUser(r)),n))if(o&&(o=o.replace(z,e.matchRegex?"\\b":""))){if("@me"===o){if(t?.username==null)continue;o=`@${t.username}`}(o=o.replace(/ /g,"+")).startsWith("@")?i.push(`author:${o.slice(1)}`):o.includes("@")?i.push(`author-email:${o}`):i.push(`author-name:${o}`)}}}return i}};L([(0,I.Rm)()],GitHubGitProvider.prototype,"getBestRevisionUri",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getWorkingUri",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"addRemote",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"pruneRemote",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"removeRemote",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"applyChangesToWorkingFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"branchContainsCommit",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"checkout",1),L([(0,I.Rm)({singleLine:!0})],GitHubGitProvider.prototype,"resetCache",1),L([(0,I.Rm)({singleLine:!0})],GitHubGitProvider.prototype,"resetCaches",1),L([(0,I.Rm)({args:{1:e=>e.length}})],GitHubGitProvider.prototype,"excludeIgnoredUris",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"fetch",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"pull",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"push",1),L([(0,S.G)(),(0,I.Yz)()],GitHubGitProvider.prototype,"findRepositoryUri",1),L([(0,I.Rm)({args:{1:e=>e.join(",")}})],GitHubGitProvider.prototype,"getAheadBehindCommitCount",1),L([(0,S.G)((e,t)=>`${e.toString()}|${t?.isDirty}`),(0,I.Rm)({args:{1:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlame",1),L([(0,I.Rm)({args:{1:"<contents>"}})],GitHubGitProvider.prototype,"getBlameContents",1),L([(0,S.G)((e,t,r,i)=>`${e.toString()}|${t}|${r?.isDirty}|${i?.forceSingleLine}`),(0,I.Rm)({args:{2:e=>e?.isDirty}})],GitHubGitProvider.prototype,"getBlameForLine",1),L([(0,I.Rm)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForLineContents",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getBlameForRange",1),L([(0,I.Rm)({args:{2:"<contents>"}})],GitHubGitProvider.prototype,"getBlameForRangeContents",1),L([(0,I.Rm)({args:{0:"<blame>"}})],GitHubGitProvider.prototype,"getBlameRange",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getBranch",1),L([(0,I.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getBranches",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getChangedFilesCount",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommit",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitBranches",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitCount",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitForFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitsForGraph",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getCommitTags",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getContributors",1),L([(0,S.G)(),(0,I.Rm)()],GitHubGitProvider.prototype,"getCurrentUser",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getDefaultBranchName",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffForFile",1),L([(0,I.Rm)({args:{1:e=>"<contents>"}})],GitHubGitProvider.prototype,"getDiffForFileContents",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffForLine",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffStatus",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getFileStatusForCommit",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getLog",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getLogRefsOnly",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getLogForFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getMergeBase",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getMergeStatus",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getRebaseStatus",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getNextComparisonUris",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getOldestUnpushedRefForFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getPreviousComparisonUris",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getPreviousComparisonUrisForLine",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getIncomingActivity",1),L([(0,I.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getRemotes",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getRevisionContent",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getStash",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getStatusForFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getStatusForFiles",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getStatusForRepo",1),L([(0,I.Rm)({args:{1:!1}})],GitHubGitProvider.prototype,"getTags",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getTreeEntryForRevision",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getTreeForRevision",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"hasBranchOrTag",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"hasCommitBeenPushed",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"getDiffTool",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"openDiffTool",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"openDirectoryCompare",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"resolveReference",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"richSearchCommits",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"searchCommits",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"validateBranchOrTagName",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"validateReference",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"stageFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"stageDirectory",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"unstageFile",1),L([(0,I.Rm)()],GitHubGitProvider.prototype,"unstageDirectory",1),L([(0,S.G)()],GitHubGitProvider.prototype,"ensureRepositoryContext",1),L([(0,S.G)()],GitHubGitProvider.prototype,"ensureGitHub",1)},1116:(e,t,r)=>{r.r(t),r.d(t,{fromCommitFileStatus:()=>v,fromGitHubIssueDetailed:()=>f,fromGitHubIssueOrPullRequestState:()=>a,fromGitHubPullRequest:()=>s,fromGitHubPullRequestDetailed:()=>m,fromGitHubPullRequestMergeableState:()=>h,fromGitHubPullRequestReviewDecision:()=>u,fromGitHubPullRequestReviewState:()=>c,fromGitHubPullRequestStatusCheckRollupState:()=>g,toGitHubPullRequestMergeableState:()=>p,toGitHubPullRequestReviewDecision:()=>d,toGitHubPullRequestState:()=>l});var i=r(5248),o=r(8559),n=r(304);function s(e,t){return new n.B9(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,{owner:e.repository.owner.login,repo:e.repository.name,accessLevel:y(e.repository.viewerPermission)},a(e.state),new Date(e.createdAt),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt),void 0,void 0,{head:{exists:null!=e.headRepository,owner:e.headRepository?.owner.login,repo:e.headRepository?.name,sha:e.headRefOid,branch:e.headRefName,url:e.headRepository?.url},base:{exists:null!=e.baseRepository,owner:e.baseRepository?.owner.login,repo:e.baseRepository?.name,sha:e.baseRefOid,branch:e.baseRefName,url:e.baseRepository?.url},isCrossRepository:e.isCrossRepository})}function a(e){return"MERGED"===e?"merged":"CLOSED"===e?"closed":"opened"}function l(e){return"merged"===e?"MERGED":"closed"===e?"CLOSED":"OPEN"}function u(e){switch(e){case"APPROVED":return n.dq.Approved;case"CHANGES_REQUESTED":return n.dq.ChangesRequested;case"REVIEW_REQUIRED":return n.dq.ReviewRequired}}function c(e){switch(e){case"APPROVED":return n.c7.Approved;case"CHANGES_REQUESTED":return n.c7.ChangesRequested;case"COMMENTED":return n.c7.Commented;case"DISMISSED":return n.c7.Dismissed;case"PENDING":return n.c7.Pending}}function d(e){switch(e){case n.dq.Approved:return"APPROVED";case n.dq.ChangesRequested:return"CHANGES_REQUESTED";case n.dq.ReviewRequired:return"REVIEW_REQUIRED"}}function h(e){switch(e){case"MERGEABLE":return n.Q6.Mergeable;case"CONFLICTING":return n.Q6.Conflicting;case"UNKNOWN":return n.Q6.Unknown}}function p(e){switch(e){case n.Q6.Mergeable:return"MERGEABLE";case n.Q6.Conflicting:return"CONFLICTING";case n.Q6.Unknown:return"UNKNOWN"}}function g(e){switch(e){case"SUCCESS":case"EXPECTED":return n.gI.Success;case"FAILURE":case"ERROR":return n.gI.Failed;case"PENDING":return n.gI.Pending;default:return}}function m(e,t){return new n.B9(t,{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},String(e.number),e.id,e.title,e.permalink,{owner:e.repository.owner.login,repo:e.repository.name,accessLevel:y(e.repository.viewerPermission)},a(e.state),new Date(e.createdAt),new Date(e.updatedAt),null==e.closedAt?void 0:new Date(e.closedAt),null==e.mergedAt?void 0:new Date(e.mergedAt),h(e.mergeable),e.viewerCanUpdate,{head:{exists:null!=e.headRepository,owner:e.headRepository?.owner.login,repo:e.headRepository?.name,sha:e.headRefOid,branch:e.headRefName,url:e.headRepository?.url},base:{exists:null!=e.baseRepository,owner:e.baseRepository?.owner.login,repo:e.baseRepository?.name,sha:e.baseRefOid,branch:e.baseRefName,url:e.baseRepository?.url},isCrossRepository:e.isCrossRepository},e.isDraft,e.additions,e.deletions,e.totalCommentsCount,e.reactions.totalCount,u(e.reviewDecision),e.reviewRequests.nodes.map(e=>null!=e.requestedReviewer?{isCodeOwner:e.asCodeOwner,reviewer:{name:e.requestedReviewer.login,avatarUrl:e.requestedReviewer.avatarUrl,url:e.requestedReviewer.url},state:n.c7.ReviewRequested}:void 0).filter(e=>!!e),e.latestReviews.nodes.map(e=>({reviewer:{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},state:c(e.state)})),e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})),g(e.commits.nodes[0].commit.statusCheckRollup?.state))}function f(e,t){return new o.m2({id:t.id,name:t.name,domain:t.domain,icon:t.icon},String(e.number),e.id,e.title,e.url,new Date(e.createdAt),new Date(e.updatedAt),e.closed,a(e.state),{name:e.author.login,avatarUrl:e.author.avatarUrl,url:e.author.url},{owner:e.repository.owner.login,repo:e.repository.name,accessLevel:y(e.repository.viewerPermission)},e.assignees.nodes.map(e=>({name:e.login,avatarUrl:e.avatarUrl,url:e.url})),null==e.closedAt?void 0:new Date(e.closedAt),e.labels?.nodes==null?void 0:e.labels.nodes.map(e=>({color:e.color,name:e.name})),e.comments?.totalCount,e.reactions?.totalCount)}function y(e){switch(e){case"ADMIN":return o.LI.Admin;case"MAINTAIN":return o.LI.Maintain;case"WRITE":return o.LI.Write;case"TRIAGE":return o.LI.Triage;case"READ":return o.LI.Read;default:return o.LI.None}}function v(e){switch(e){case"added":return i.NO.Added;case"changed":case"modified":return i.NO.Modified;case"removed":return i.NO.Deleted;case"renamed":return i.NO.Renamed;case"copied":return i.NO.Copied}}},2035:(e,t,r)=>{r.r(t),r.d(t,{GitLabIntegration:()=>GitLabIntegration,GitLabSelfHostedIntegration:()=>GitLabSelfHostedIntegration});var i=r(6707),o=r(1014),n=r(65),s=r(1298),a=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let u=s.Mt[s.Q7.GitLab],c=Object.freeze({id:u.id,scopes:u.scopes}),d=s.Mt[s.PY.GitLabSelfHosted],h=Object.freeze({id:d.id,scopes:d.scopes});let GitLabIntegrationBase=class GitLabIntegrationBase extends n.T5{async getProviderAccountForCommit({accessToken:e},t,r,i){return(await this.container.gitlab)?.getAccountForCommit(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderAccountForEmail({accessToken:e},t,r,i){return(await this.container.gitlab)?.getAccountForEmail(this,e,t.owner,t.name,r,{...i,baseUrl:this.apiBaseUrl})}async getProviderDefaultBranch({accessToken:e},t){return(await this.container.gitlab)?.getDefaultBranch(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl})}async getProviderIssueOrPullRequest({accessToken:e},t,r){return(await this.container.gitlab)?.getIssueOrPullRequest(this,e,t.owner,t.name,Number(r),{baseUrl:this.apiBaseUrl})}async getProviderPullRequestForBranch({accessToken:e},t,i,o){let{include:n,...s}=o??{},a=(await Promise.resolve().then(r.bind(r,372))).toGitLabMergeRequestState;return(await this.container.gitlab)?.getPullRequestForBranch(this,e,t.owner,t.name,i,{...s,include:n?.map(e=>a(e)),baseUrl:this.apiBaseUrl})}async getProviderPullRequestForCommit({accessToken:e},t,r){return(await this.container.gitlab)?.getPullRequestForCommit(this,e,t.owner,t.name,r,{baseUrl:this.apiBaseUrl})}async getProviderRepositoryMetadata({accessToken:e},t,r){return(await this.container.gitlab)?.getRepositoryMetadata(this,e,t.owner,t.name,{baseUrl:this.apiBaseUrl},r)}searchProviderMyPullRequests(e,t){return Promise.resolve(void 0)}searchProviderMyIssues(e,t){return Promise.resolve(void 0)}async mergeProviderPullRequest(e,t,r){return Promise.resolve(!1)}};let GitLabIntegration=class GitLabIntegration extends GitLabIntegrationBase{authProvider=c;id=s.Q7.GitLab;key=this.id;name="GitLab";get domain(){return u.domain}get apiBaseUrl(){return"https://gitlab.com/api"}};let GitLabSelfHostedIntegration=class GitLabSelfHostedIntegration extends GitLabIntegrationBase{constructor(e,t,r){super(e,t),this._domain=r}authProvider=h;id=s.PY.GitLabSelfHosted;key=`${this.id}:${this.domain}`;name="GitLab Self-Hosted";get domain(){return this._domain}get apiBaseUrl(){return`https://${this._domain}/api`}async connect(){return!!await (0,o.KH)(this.container,`Rich integration with ${this.name} is a Pro feature.`,{source:"integrations",detail:{action:"connect",integration:this.id}})&&super.connect()}};((e,t,r,i)=>{for(var o,n=l(t,r),s=e.length-1;s>=0;s--)(o=e[s])&&(n=o(t,r,n)||n);return i&&n&&a(t,r,n)})([(0,i.Rm)()],GitLabSelfHostedIntegration.prototype,"connect",1)},69:(e,t,r)=>{r.r(t),r.d(t,{GitLabApi:()=>GitLabApi});var i=r(1398),o=r(3459),n=r(7372),s=r(8803),a=r(304),l=r(3536),u=r(4832),c=r(6707),d=r(3916),h=r(3446),p=r(937),g=r(3166),m=r(372),f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=(e,t,r,i)=>{for(var o,n=i>1?void 0:i?y(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&f(t,r,n),n};let GitLabApi=class GitLabApi{_disposable;_projectIds=new Map;constructor(e){this._disposable=u.H.onDidChangeAny(e=>{(u.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||u.H.changed(e,["proxy","remotes"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._projectIds.clear(),this._proxyAgents.clear()}_proxyAgents=new Map;getProxyAgent(e){if(n.HZ)return;let t=this._proxyAgents.get(e.id);if(void 0===t){let r=e.getIgnoreSSLErrors();t=(0,o.cQ)(!0!==r&&"force"!==r&&void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}async getAccountForCommit(e,t,r,o,n,a,l){let u=(0,h.dQ)(),c=await this.getProjectId(e,t,r,o,a?.baseUrl,l);if(c)try{let r;let o=await this.request(e,t,a?.baseUrl,`v4/projects/${c}/repository/commits/${n}?stats=false`,{method:"GET"},l,u);for(let i of(await this.findUser(e,t,o.author_name,a)))if(i.name===o.author_name||i.publicEmail&&i.publicEmail===o.author_email){if(r=i,"active"===i.state)break}else((0,g.Q_)(i.name,o.author_name)||i.publicEmail&&(0,g.Q_)(i.publicEmail,o.author_email))&&(r=i);if(null==r)return;return r.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(r.avatarUrl)&&(r.avatarUrl=i.Uri.joinPath(i.Uri.parse(r.webUrl),"..",r.avatarUrl).toString()),{provider:e,name:r.name||void 0,email:o.author_email||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,u)}}async getAccountForEmail(e,t,r,i,o,n){let a=(0,h.dQ)();try{let[r]=await this.findUser(e,t,o,n);if(null==r)return;return{provider:e,name:r.name||void 0,email:r.publicEmail||void 0,avatarUrl:r.avatarUrl||void 0,username:r.username||void 0}}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,a)}}async getDefaultBranch(e,t,r,i,o,n){let a=(0,h.dQ)();try{let s=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,l=await this.graphql(e,t,o?.baseUrl,s,{fullPath:`${r}/${i}`},n,a),u=l?.data?.project?.repository?.rootRef??void 0;if(null==u)return;return{provider:e,name:u}}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,a)}}async getIssueOrPullRequest(e,t,r,i,o,n,a){let l=(0,h.dQ)();try{let s=`query getIssueOrMergeRequest(
	$fullPath: ID!
	$iid: String!
) {
	project(fullPath: $fullPath) {
		mergeRequest(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			mergedAt
			webUrl
		}
		issue(iid: $iid) {
			author {
				name
				avatarUrl
				webUrl
			}
			iid
			title
			description
			state
			createdAt
			updatedAt
			closedAt
			webUrl
		}
	}
}`,u=await this.graphql(e,t,n?.baseUrl,s,{fullPath:`${r}/${i}`,iid:String(o)},a,l);if(u?.data?.project?.issue!=null){let t=u.data.project.issue;return{provider:e,type:"issue",id:t.iid,nodeId:void 0,createdDate:new Date(t.createdAt),updatedDate:new Date(t.updatedAt),title:t.title,closed:"closed"===t.state,closedDate:null==t.closedAt?void 0:new Date(t.closedAt),url:t.webUrl,state:"locked"===t.state?"closed":t.state}}if(u?.data?.project?.mergeRequest!=null){let t=u.data.project.mergeRequest;return{provider:e,type:"pullrequest",id:t.iid,nodeId:void 0,createdDate:new Date(t.createdAt),updatedDate:new Date(t.updatedAt),title:t.title,closed:"closed"===t.state,closedDate:"closed"===t.state?new Date(t.updatedAt):void 0,url:t.webUrl,state:"locked"===t.state?"closed":t.state}}return}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,l)}}async getPullRequestForBranch(e,t,r,i,o,n,l){let u=(0,h.dQ)();try{let s;let c=`
			nodes {
				iid
				author {
					name
					avatarUrl
					webUrl
				}
				title
				description
				state
				createdAt
				updatedAt
				mergedAt
				webUrl
			}`,d=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${n?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
		${n?.include?.includes("opened")?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
		${n?.include?.includes("merged")?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
		${n?.include?.includes("closed")?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${c}
		}`:""}
	}
}`,h=await this.graphql(e,t,n?.baseUrl,d,{fullPath:`${r}/${i}`,branches:[o],state:n?.include},l,u);if(n?.include==null)s=h?.data?.project?.mergeRequests?.nodes?.[0];else for(let e of n.include){let t;"opened"===e?t=h?.data?.project?.opened?.nodes?.[0]:"merged"===e?t=h?.data?.project?.merged?.nodes?.[0]:"closed"===e&&(t=h?.data?.project?.closed?.nodes?.[0]),null!=t&&(null==s||new Date(t.updatedAt)>new Date(s.updatedAt))&&(s=t)}if(null==s)return;return new a.B9(e,{name:s.author?.name??"Unknown",avatarUrl:s.author?.avatarUrl??"",url:s.author?.webUrl??""},String(s.iid),void 0,s.title,s.webUrl,{owner:r,repo:i},(0,m.fromGitLabMergeRequestState)(s.state),new Date(s.createdAt),new Date(s.updatedAt),"closed"!==s.state?void 0:new Date(s.updatedAt),null==s.mergedAt?void 0:new Date(s.mergedAt))}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,u)}}async getPullRequestForCommit(e,t,r,i,o,n,a){let l=(0,h.dQ)(),u=await this.getProjectId(e,t,r,i,n?.baseUrl,a);if(u)try{let s=await this.request(e,t,n?.baseUrl,`v4/projects/${u}/repository/commits/${o}/merge_requests`,{method:"GET"},a,l);if(null==s||0===s.length)return;return s.length>1&&s.sort((e,t)=>("opened"===e.state?-1:1)-("opened"===t.state?-1:1)||new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()),(0,m.fromGitLabMergeRequestREST)(s[0],e,{owner:r,repo:i})}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,l)}}async getRepositoryMetadata(e,t,r,i,o,n){let a=(0,h.dQ)(),l=await this.getProjectId(e,t,r,i,o?.baseUrl,n);if(l)try{let r=await this.request(e,t,o?.baseUrl,`v4/projects/${l}`,{method:"GET"},n,a);if(null==r)return;return{provider:e,owner:r.namespace.full_path,name:r.path,isFork:null!=r.forked_from_project,parent:null!=r.forked_from_project?{owner:r.forked_from_project.namespace.full_path,name:r.forked_from_project.path}:void 0}}catch(t){if(t instanceof s.g3)return;throw this.handleException(t,e,a)}}async findUser(e,t,r,i,o){let n=(0,h.dQ)();try{let s=`query findUser(
$search: String!
) {
	users(search: $search) {
		nodes {
			id
			name
			username,
			publicEmail,
			state
			avatarUrl
			webUrl
		}
	}
}`,a=await this.graphql(e,t,i?.baseUrl,s,{search:r},o,n),l=a?.data?.users?.nodes;if(null==l||0===l.length)return[];let u=[];for(let e of l){let t=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(e.id);null!=t&&u.push({id:parseInt(t[1],10),name:e.name,username:e.username,publicEmail:e.publicEmail||void 0,state:e.state,avatarUrl:e.avatarUrl,webUrl:e.webUrl})}return u}catch(t){if(t instanceof s.g3)return[];return this.handleException(t,e,n),[]}}getProjectId(e,t,r,i,o,n){let s=`${t}|${r}/${i}`,a=this._projectIds.get(s);return null==a&&(a=this.getProjectIdCore(e,t,r,i,o,n),this._projectIds.set(s,a)),a}async getProjectIdCore(e,t,r,i,o,n){let a=(0,h.dQ)();try{let s=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,l=await this.graphql(e,t,o,s,{fullPath:`${r}/${i}`},n,a),u=l?.data?.project?.id;if(null==u)return;let c=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(u);if(null==c)return;let d=c[1];return(0,h.TT)(a,` \u2022 projectId=${d}`),d}catch(t){if(t instanceof s.g3)return;this.handleException(t,e,a);return}}async graphql(e,t,r,n,a,l,u){let c;try{let i=(0,p.u)(`[GITLAB] POST ${r}`,{log:!1}),u=this.getProxyAgent(e);try{let i;if(null!=l){if(l.isCancellationRequested)throw new s.AL;i=new AbortController,l.onCancellationRequested(()=>i.abort())}if((c=await (0,o.Ff)(e.getIgnoreSSLErrors(),()=>(0,o.hd)(`${r??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:u,signal:i?.signal,body:JSON.stringify({query:n,variables:a})}))).ok){let e=await c.json();if("errors"in e)throw new s.QI("GitLab",c,e.errors);return e}throw new s.QI("GitLab",c)}finally{let e=/(^[^({\n]+)/.exec(n),t=` ${e?.[1].trim()??n}`;i?.stop({message:t})}}catch(r){throw r instanceof s.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,u):d.Vy.isDebugging&&i.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}async request(e,t,r,n,a,l,u){let c;let h=`${r??"https://gitlab.com/api"}/${n}`;try{let r=(0,p.u)(`[GITLAB] ${a?.method??"GET"} ${h}`,{log:!1}),i=this.getProxyAgent(e);try{let r;if(null!=l){if(l.isCancellationRequested)throw new s.AL;r=new AbortController,l.onCancellationRequested(()=>r.abort())}if((c=await (0,o.Ff)(e.getIgnoreSSLErrors(),()=>(0,o.hd)(h,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:i,signal:r?.signal,...a}))).ok)return await c.json();throw new s.QI("GitLab",c)}finally{r?.stop()}}catch(r){throw r instanceof s.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,u):d.Vy.isDebugging&&i.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}handleRequestError(e,t,r,o){if("AbortError"===r.name||!(r instanceof s.QI))throw new s.AL(r);switch(r.status){case 404:case 410:case 422:throw new s.g3(r);case 401:throw new s.v3("gitlab",s.R.Unauthorized,r);case 403:if(r.message.includes("rate limit exceeded")){let e;let i=r.response?.headers?.get("x-ratelimit-reset");throw null!=i&&Number.isNaN(e=parseInt(i,10))&&(e=void 0),new s.qc(r,t,e)}throw new s.v3("gitlab",s.R.Forbidden,r);case 500:d.Vy.error(r,o),null!=r.response&&(e?.trackRequestException(),(0,l.wW)(`${e?.name??"GitLab"} failed to respond and might be experiencing issues.${null==e||"gitlab"===e.id?" Please visit the [GitLab status page](https://status.gitlab.com) for more information.":""}`));return;case 502:if(d.Vy.error(r,o),r.message.includes("timeout")){e?.trackRequestException(),(0,l.lW)(e?.name??"GitLab");return}break;default:if(r.status>=400&&r.status<500)throw new s.Iz(r)}d.Vy.error(r,o),d.Vy.isDebugging&&i.window.showErrorMessage(`GitLab request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return d.Vy.error(e,r),e instanceof s.v3&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===s.R.Unauthorized||e.reason===s.R.Forbidden){let r="Reauthenticate";await i.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===s.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t.reauthenticate(),this.resetCaches())}else i.window.showErrorMessage(e.message)}};v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForCommit",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForEmail",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getDefaultBranch",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getIssueOrPullRequest",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForBranch",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForCommit",1),v([(0,c.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getRepositoryMetadata",1)},372:(e,t,r)=>{r.r(t),r.d(t,{fromGitLabMergeRequestREST:()=>s,fromGitLabMergeRequestState:()=>o,toGitLabMergeRequestState:()=>n});var i=r(304);function o(e){return"locked"===e?"closed":e}function n(e){return e}function s(e,t,r){return new i.B9(t,{name:e.author?.name??"Unknown",avatarUrl:e.author?.avatar_url??"",url:e.author?.web_url??""},String(e.iid),void 0,e.title,e.web_url,r,o(e.state),new Date(e.created_at),new Date(e.updated_at),null==e.closed_at?void 0:new Date(e.closed_at),null==e.merged_at?void 0:new Date(e.merged_at))}},7832:(e,t,r)=>{r.r(t),r.d(t,{JiraIntegration:()=>JiraIntegration});var i=r(4026),o=r(65),n=r(1298);let s=n.Mt[n.tp.Jira],a=Object.freeze({id:s.id,scopes:s.scopes});let JiraIntegration=class JiraIntegration extends o.On{authProvider=a;id=n.tp.Jira;key=this.id;name="Jira";get domain(){return s.domain}get apiBaseUrl(){return"https://api.atlassian.com"}_autolinks;async autolinks(){if(!(this.maybeConnected??await this.isConnected())||null==this._session||null==this._organizations||null==this._projects)return[];this._autolinks||=new Map;let e=this._autolinks.get(this._session.accessToken);if(null!=e)return e;let t=[],r=this._organizations.get(this._session.accessToken);if(null!=r)for(let e of r){let r=this._projects.get(`${this._session.accessToken}:${e.id}`);if(null!=r)for(let i of r){let r=`${i.key}-`;t.push({type:"issue",url:`${e.url}/browse/${r}<num>`,prefix:r,title:`Open Issue ${r}<num> on ${e.name}`,description:`${e.name} Issue ${r}<num>`,descriptor:{...e}})}}return this._autolinks.set(this._session.accessToken,t),t}async getProviderAccountForResource({accessToken:e},t){let r=await this.getProvidersApi(),i=await r.getCurrentUserForResource(this.id,t.id,{accessToken:e});if(null!=i)return(0,n.tf)(i,this)}_organizations;async getProviderResourcesForUser({accessToken:e},t=!1){if(this._organizations||=new Map,null==this._organizations.get(e)||t){let t=await this.getProvidersApi(),r=await t.getJiraResourcesForCurrentUser({accessToken:e});this._organizations.set(e,null!=r?r.map(e=>({...e,key:e.id})):void 0)}return this._organizations.get(e)}_projects;async getProviderProjectsForResources({accessToken:e},t,r=!1){this._projects||=new Map;let i=[];if(r)i=t;else for(let r of t){let t=`${e}:${r.id}`;null==this._projects.get(t)&&i.push(r)}if(i.length>0){let t=await this.getProvidersApi(),r=await t.getJiraProjectsForResources(i.map(e=>e.id),{accessToken:e});for(let t of i){let i=r?.filter(e=>e.resourceId===t.id);null!=i&&this._projects.set(`${e}:${t.id}`,i.map(e=>({...e})))}}return t.reduce((t,r)=>{let i=this._projects.get(`${e}:${r.id}`);return null!=i&&t.push(...i),t},[])}async getProviderIssuesForProject({accessToken:e},t,r){let o;let s=await this.getProvidersApi(),a=async(r,i)=>{let o=await s.getIssuesForProject(this.id,t.name,t.resourceId,{authorLogin:i===n.mN.Author?r:void 0,assigneeLogins:i===n.mN.Assignee?[r]:void 0,mentionLogin:i===n.mN.Mention?r:void 0,accessToken:e});return o?.map(e=>n.oH(e,this,i)).filter(e=>void 0!==e)};if(r?.user!=null&&r.filters.length>0){let e=Promise.allSettled(r.filters.map(e=>a(r.user,e)));o=[...(0,i.Bq)((0,i.x1)(await e,e=>"fulfilled"===e.status&&null!=e.value?e.value:void 0))];let t=new Map;for(let e of o)if(t.has(e.issue.id)){let r=t.get(e.issue.id);r.reasons=[...r.reasons,...e.reasons]}else t.set(e.issue.id,e);return[...t.values()]}return o=await s.getIssuesForProject(this.id,t.name,t.resourceId,{accessToken:e}),o?.map(e=>n.oH(e,this)).filter(e=>void 0!==e)}async searchProviderMyIssues(e,t,r){let i=t??await this.getProviderResourcesForUser(e);if(!i)return;let o=await this.getProvidersApi(),s=[];for(let t of i){let r=(await this.getProviderAccountForResource(e,t))?.username,i=await o.getIssuesForResourceForCurrentUser(this.id,t.id,{accessToken:e.accessToken}),a=i?.map(e=>n.oH(e,this,void 0,r)).filter(e=>null!=e);null!=a&&s.push(...a)}return s}async getProviderIssueOrPullRequest(e,t,r){let i=await this.getProvidersApi(),o=(await this.getProviderAccountForResource(e,t))?.username,s=await i.getIssue(this.id,t.id,r,{accessToken:e.accessToken});return null!=s?n.oH(s,this,void 0,o)?.issue:void 0}async providerOnConnect(){if(this._autolinks=void 0,null==this._session)return;let e=this.container.storage.get(`jira:${this._session.accessToken}:organizations`),t=this.container.storage.get(`jira:${this._session.accessToken}:projects`),r=e?.data?.map(e=>({...e})),i=t?.data?.map(e=>({...e}));for(let o of(null==e&&(r=await this.getProviderResourcesForUser(this._session,!0),await this.container.storage.store(`jira:${this._session.accessToken}:organizations`,{v:1,timestamp:Date.now(),data:r})),this._organizations||=new Map,this._organizations.set(this._session.accessToken,r),null==t&&r?.length&&(i=await this.getProviderProjectsForResources(this._session,r),await this.container.storage.store(`jira:${this._session.accessToken}:projects`,{v:1,timestamp:Date.now(),data:i})),this._projects||=new Map,i??[])){let e=`${this._session.accessToken}:${o.resourceId}`,t=this._projects.get(e);null==t?this._projects.set(e,[o]):t.push(o)}}providerOnDisconnect(){this._organizations=void 0,this._projects=void 0,this._autolinks=void 0}}}};