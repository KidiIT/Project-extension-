exports.id=262,exports.ids=[262],exports.modules={69:(e,t,r)=>{r.r(t),r.d(t,{GitLabApi:()=>GitLabApi});var a=r(1398),i=r(3459),s=r(7372),o=r(8803),n=r(304),l=r(3536),d=r(4832),u=r(6707),c=r(3916),h=r(3446),p=r(937),g=r(3166),m=r(372),f=Object.defineProperty,w=Object.getOwnPropertyDescriptor,b=(e,t,r,a)=>{for(var i,s=a>1?void 0:a?w(t,r):t,o=e.length-1;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&f(t,r,s),s};let GitLabApi=class GitLabApi{_disposable;_projectIds=new Map;constructor(e){this._disposable=d.H.onDidChangeAny(e=>{(d.H.changedCore(e,["http.proxy","http.proxyStrictSSL"])||d.H.changed(e,["proxy","remotes"]))&&this.resetCaches()})}dispose(){this._disposable.dispose()}resetCaches(){this._projectIds.clear(),this._proxyAgents.clear()}_proxyAgents=new Map;getProxyAgent(e){if(s.HZ)return;let t=this._proxyAgents.get(e.id);if(void 0===t){let r=e.getIgnoreSSLErrors();t=(0,i.cQ)(!0!==r&&"force"!==r&&void 0),this._proxyAgents.set(e.id,t??null)}return t??void 0}async getAccountForCommit(e,t,r,i,s,n,l){let d=(0,h.dQ)(),u=await this.getProjectId(e,t,r,i,n?.baseUrl,l);if(u)try{let r;let i=await this.request(e,t,n?.baseUrl,`v4/projects/${u}/repository/commits/${s}?stats=false`,{method:"GET"},l,d);for(let a of(await this.findUser(e,t,i.author_name,n)))if(a.name===i.author_name||a.publicEmail&&a.publicEmail===i.author_email){if(r=a,"active"===a.state)break}else((0,g.Q_)(a.name,i.author_name)||a.publicEmail&&(0,g.Q_)(a.publicEmail,i.author_email))&&(r=a);if(null==r)return;return r.avatarUrl&&!/^([a-zA-Z][\w+.-]+):/.test(r.avatarUrl)&&(r.avatarUrl=a.Uri.joinPath(a.Uri.parse(r.webUrl),"..",r.avatarUrl).toString()),{provider:e,name:r.name||void 0,email:i.author_email||void 0,avatarUrl:r.avatarUrl||void 0}}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,d)}}async getAccountForEmail(e,t,r,a,i,s){let n=(0,h.dQ)();try{let[r]=await this.findUser(e,t,i,s);if(null==r)return;return{provider:e,name:r.name||void 0,email:r.publicEmail||void 0,avatarUrl:r.avatarUrl||void 0}}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,n)}}async getDefaultBranch(e,t,r,a,i,s){let n=(0,h.dQ)();try{let o=`query getDefaultBranch(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		repository {
			rootRef
		}
}`,l=await this.graphql(e,t,i?.baseUrl,o,{fullPath:`${r}/${a}`},s,n),d=l?.data?.project?.repository?.rootRef??void 0;if(null==d)return;return{provider:e,name:d}}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,n)}}async getIssueOrPullRequest(e,t,r,a,i,s,n){let l=(0,h.dQ)();try{let o=`query getIssueOrMergeRequest(
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
}`,d=await this.graphql(e,t,s?.baseUrl,o,{fullPath:`${r}/${a}`,iid:String(i)},n,l);if(d?.data?.project?.issue!=null){let t=d.data.project.issue;return{provider:e,type:"issue",id:t.iid,nodeId:void 0,date:new Date(t.createdAt),title:t.title,closed:"closed"===t.state,closedDate:null==t.closedAt?void 0:new Date(t.closedAt),url:t.webUrl,state:"locked"===t.state?"closed":t.state}}if(d?.data?.project?.mergeRequest!=null){let t=d.data.project.mergeRequest;return{provider:e,type:"pullrequest",id:t.iid,nodeId:void 0,date:new Date(t.createdAt),title:t.title,closed:"closed"===t.state,closedDate:"closed"===t.state?new Date(t.updatedAt):void 0,url:t.webUrl,state:"locked"===t.state?"closed":t.state}}return}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,l)}}async getPullRequestForBranch(e,t,r,a,i,s,l){let d=(0,h.dQ)();try{let o;let u=`
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
			}`,c=`query getMergeRequestForBranch(
	$fullPath: ID!
	$branches: [String!]
) {
	project(fullPath: $fullPath) {
		${s?.include==null?`mergeRequests(sourceBranches: $branches sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
		${s?.include?.includes("opened")?`opened: mergeRequests(sourceBranches: $branches state: opened sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
		${s?.include?.includes("merged")?`merged: mergeRequests(sourceBranches: $branches state: merged sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
		${s?.include?.includes("closed")?`closed: mergeRequests(sourceBranches: $branches state: closed sort: UPDATED_DESC first: 1) {
			${u}
		}`:""}
	}
}`,h=await this.graphql(e,t,s?.baseUrl,c,{fullPath:`${r}/${a}`,branches:[i],state:s?.include},l,d);if(s?.include==null)o=h?.data?.project?.mergeRequests?.nodes?.[0];else for(let e of s.include){let t;"opened"===e?t=h?.data?.project?.opened?.nodes?.[0]:"merged"===e?t=h?.data?.project?.merged?.nodes?.[0]:"closed"===e&&(t=h?.data?.project?.closed?.nodes?.[0]),null!=t&&(null==o||new Date(t.updatedAt)>new Date(o.updatedAt))&&(o=t)}if(null==o)return;return new n.B9(e,{name:o.author?.name??"Unknown",avatarUrl:o.author?.avatarUrl??"",url:o.author?.webUrl??""},String(o.iid),void 0,o.title,o.webUrl,(0,m.fromGitLabMergeRequestState)(o.state),new Date(o.updatedAt),"closed"!==o.state?void 0:new Date(o.updatedAt),null==o.mergedAt?void 0:new Date(o.mergedAt))}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,d)}}async getPullRequestForCommit(e,t,r,a,i,s,n){let l=(0,h.dQ)(),d=await this.getProjectId(e,t,r,a,s?.baseUrl,n);if(d)try{let r=await this.request(e,t,s?.baseUrl,`v4/projects/${d}/repository/commits/${i}/merge_requests`,{method:"GET"},n,l);if(null==r||0===r.length)return;return r.length>1&&r.sort((e,t)=>("opened"===e.state?-1:1)-("opened"===t.state?-1:1)||new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()),(0,m.fromGitLabMergeRequestREST)(r[0],e)}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,l)}}async getRepositoryMetadata(e,t,r,a,i,s){let n=(0,h.dQ)(),l=await this.getProjectId(e,t,r,a,i?.baseUrl,s);if(l)try{let r=await this.request(e,t,i?.baseUrl,`v4/projects/${l}`,{method:"GET"},s,n);if(null==r)return;return{provider:e,owner:r.namespace.full_path,name:r.path,isFork:null!=r.forked_from_project,parent:null!=r.forked_from_project?{owner:r.forked_from_project.namespace.full_path,name:r.forked_from_project.path}:void 0}}catch(t){if(t instanceof o.g3)return;throw this.handleException(t,e,n)}}async findUser(e,t,r,a,i){let s=(0,h.dQ)();try{let o=`query findUser(
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
}`,n=await this.graphql(e,t,a?.baseUrl,o,{search:r},i,s),l=n?.data?.users?.nodes;if(null==l||0===l.length)return[];let d=[];for(let e of l){let t=/gid:\/\/gitlab\/User\/([0-9]+)\b/.exec(e.id);null!=t&&d.push({id:parseInt(t[1],10),name:e.name,username:e.username,publicEmail:e.publicEmail||void 0,state:e.state,avatarUrl:e.avatarUrl,webUrl:e.webUrl})}return d}catch(t){if(t instanceof o.g3)return[];return this.handleException(t,e,s),[]}}getProjectId(e,t,r,a,i,s){let o=`${t}|${r}/${a}`,n=this._projectIds.get(o);return null==n&&(n=this.getProjectIdCore(e,t,r,a,i,s),this._projectIds.set(o,n)),n}async getProjectIdCore(e,t,r,a,i,s){let n=(0,h.dQ)();try{let o=`query getProjectId(
	$fullPath: ID!
) {
	project(fullPath: $fullPath) {
		id
	}
}`,l=await this.graphql(e,t,i,o,{fullPath:`${r}/${a}`},s,n),d=l?.data?.project?.id;if(null==d)return;let u=/gid:\/\/gitlab\/Project\/([0-9]+)\b/.exec(d);if(null==u)return;let c=u[1];return(0,h.TT)(n,` \u2022 projectId=${c}`),c}catch(t){if(t instanceof o.g3)return;this.handleException(t,e,n);return}}async graphql(e,t,r,s,n,l,d){let u;try{let a=(0,p.u)(`[GITLAB] POST ${r}`,{log:!1}),d=this.getProxyAgent(e);try{let a;if(null!=l){if(l.isCancellationRequested)throw new o.AL;a=new AbortController,l.onCancellationRequested(()=>a.abort())}if((u=await (0,i.Ff)(e.getIgnoreSSLErrors(),()=>(0,i.hd)(`${r??"https://gitlab.com/api"}/graphql`,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:d,signal:a?.signal,body:JSON.stringify({query:s,variables:n})}))).ok){let e=await u.json();if("errors"in e)throw new o.QI("GitLab",u,e.errors);return e}throw new o.QI("GitLab",u)}finally{let e=/(^[^({\n]+)/.exec(s),t=` ${e?.[1].trim()??s}`;a?.stop({message:t})}}catch(r){throw r instanceof o.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,d):c.Vy.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}async request(e,t,r,s,n,l,d){let u;let h=`${r??"https://gitlab.com/api"}/${s}`;try{let r=(0,p.u)(`[GITLAB] ${n?.method??"GET"} ${h}`,{log:!1}),a=this.getProxyAgent(e);try{let r;if(null!=l){if(l.isCancellationRequested)throw new o.AL;r=new AbortController,l.onCancellationRequested(()=>r.abort())}if((u=await (0,i.Ff)(e.getIgnoreSSLErrors(),()=>(0,i.hd)(h,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},agent:a,signal:r?.signal,...n}))).ok)return await u.json();throw new o.QI("GitLab",u)}finally{r?.stop()}}catch(r){throw r instanceof o.QI||"AbortError"===r.name?this.handleRequestError(e,t,r,d):c.Vy.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.message}`),r}}handleRequestError(e,t,r,i){if("AbortError"===r.name||!(r instanceof o.QI))throw new o.AL(r);switch(r.status){case 404:case 410:case 422:throw new o.g3(r);case 401:throw new o.v3("gitlab",o.R.Unauthorized,r);case 403:if(r.message.includes("rate limit exceeded")){let e;let a=r.response?.headers?.get("x-ratelimit-reset");throw null!=a&&Number.isNaN(e=parseInt(a,10))&&(e=void 0),new o.qc(r,t,e)}throw new o.v3("gitlab",o.R.Forbidden,r);case 500:c.Vy.error(r,i),null!=r.response&&(e?.trackRequestException(),(0,l.wW)(`${e?.name??"GitLab"} failed to respond and might be experiencing issues.${null==e||"gitlab"===e.id?" Please visit the [GitLab status page](https://status.gitlab.com) for more information.":""}`));return;case 502:if(c.Vy.error(r,i),r.message.includes("timeout")){e?.trackRequestException(),(0,l.lW)(e?.name??"GitLab");return}break;default:if(r.status>=400&&r.status<500)throw new o.Iz(r)}c.Vy.error(r,i),c.Vy.isDebugging&&a.window.showErrorMessage(`GitLab request failed: ${r.response?.errors?.[0]?.message??r.message}`)}handleException(e,t,r){return c.Vy.error(e,r),e instanceof o.v3&&this.showAuthenticationErrorMessage(e,t),e}async showAuthenticationErrorMessage(e,t){if(e.reason===o.R.Unauthorized||e.reason===o.R.Forbidden){let r="Reauthenticate";await a.window.showErrorMessage(`${e.message}. Would you like to try reauthenticating${e.reason===o.R.Forbidden?" to provide additional access":""}?`,r)===r&&(await t.reauthenticate(),this.resetCaches())}else a.window.showErrorMessage(e.message)}};b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForCommit",1),b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getAccountForEmail",1),b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getDefaultBranch",1),b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getIssueOrPullRequest",1),b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForBranch",1),b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getPullRequestForCommit",1),b([(0,u.Yz)({args:{0:e=>e.name,1:"<token>"}})],GitLabApi.prototype,"getRepositoryMetadata",1)},372:(e,t,r)=>{r.r(t),r.d(t,{fromGitLabMergeRequestREST:()=>o,fromGitLabMergeRequestState:()=>i,toGitLabMergeRequestState:()=>s});var a=r(304);function i(e){return"locked"===e?"closed":e}function s(e){return e}function o(e,t){return new a.B9(t,{name:e.author?.name??"Unknown",avatarUrl:e.author?.avatar_url??"",url:e.author?.web_url??""},String(e.iid),void 0,e.title,e.web_url,i(e.state),new Date(e.updated_at),null==e.closed_at?void 0:new Date(e.closed_at),null==e.merged_at?void 0:new Date(e.merged_at))}}};