(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{1421:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var s=t(5893),r=t(7294),i=t(2122),a=t(809),c=t.n(a),o=t(2447),l=t(9227),d=t(1163),u=t(2938),p=t(9163),h=t(3758),f=t(7812),x=t(3430),j=t(5833),v=t(9019),m=t(6265),k=t(1749),g=t(6445),Z=t(7784),w=t(3408),_=t(3303),y=t(6479),P=t(7215);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,m.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=p.ZP.div.withConfig({displayName:"TasksFilters__FiltersContainer",componentId:"rq9lvz-0"})(["margin-top:20px;"]),T=p.ZP.div.withConfig({displayName:"TasksFilters__ControlContainer",componentId:"rq9lvz-1"})(["background-color:#c0cde0;border-radius:5px;padding:10px;"]),N=(0,u.Pi)((function(e){var n=e.filters,t=e.setFilters;return(0,s.jsx)(b,{children:(0,s.jsxs)(k.Z,{justify:"space-between",container:!0,children:[(0,s.jsx)(k.Z,{item:!0,children:(0,s.jsx)(T,{children:(0,s.jsx)(g.Z,{style:{width:"220px"},children:(0,s.jsx)(Z.Z,{placeholder:"Search...",value:n.search,onChange:function(e){var s=e.target.value;t(O(O({},n),{},{search:s}))},InputProps:{startAdornment:(0,s.jsx)(w.Z,{position:"start",children:(0,s.jsx)(P.Z,{})})}})})})}),(0,s.jsx)(k.Z,{item:!0,children:(0,s.jsx)(T,{children:(0,s.jsx)(g.Z,{style:{width:"220px"},children:(0,s.jsxs)(_.Z,{value:n.status,onChange:function(e){var s=e.target.value;t(O(O({},n),{},{status:s}))},displayEmpty:!0,children:[(0,s.jsx)(y.Z,{value:"",children:"No status filter"}),(0,s.jsx)(y.Z,{value:"OPEN",children:"Open"}),(0,s.jsx)(y.Z,{value:"IN_PROGRESS",children:"In Progress"}),(0,s.jsx)(y.Z,{value:"DONE",children:"Done"})]})})})})]})})})),I=t(8463),E=t(9912),S=t(1907),D=t(6945),F=p.ZP.div.withConfig({displayName:"Task__CardContainer",componentId:"sc-1lre3du-0"})(["margin-bottom:20px;"]),V=p.ZP.h1.withConfig({displayName:"Task__CardTitle",componentId:"sc-1lre3du-1"})(["margin:8px 0;font-size:22px;"]),z=function(e){var n=e.id,t=e.title,r=e.description,i=e.status,a=(0,v.rs)(),l=(0,v.h_)(),d=l.deleteTask,u=l.updateTaskStatus;return(0,s.jsx)(F,{children:(0,s.jsxs)(I.Z,{children:[(0,s.jsxs)(E.Z,{children:[(0,s.jsx)(V,{children:t}),r]}),(0,s.jsx)(S.Z,{style:{padding:"14px"},disableSpacing:!0,children:(0,s.jsxs)(k.Z,{justify:"space-between",container:!0,children:[(0,s.jsx)(k.Z,{item:!0,children:(0,s.jsx)(g.Z,{style:{width:"140px"},children:(0,s.jsxs)(_.Z,{value:i,onChange:function(e){var t=e.target.value;(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(n,t);case 3:a.updateTaskStatus(n,t),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.trace(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},displayEmpty:!0,children:[(0,s.jsx)(y.Z,{value:"OPEN",children:"Open"}),(0,s.jsx)(y.Z,{value:"IN_PROGRESS",children:"In Progress"}),(0,s.jsx)(y.Z,{value:"DONE",children:"Done"})]})})}),(0,s.jsx)(k.Z,{item:!0,children:(0,s.jsx)(f.Z,{onClick:function(){(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:a.removeTask(n);case 3:case"end":return e.stop()}}),e)})))()},children:(0,s.jsx)(D.Z,{color:"error"})})})]})})]})})},R=p.ZP.p.withConfig({displayName:"TasksList__EmptyTasksPlaceholder",componentId:"itn52l-0"})(["color:#edf4ff;text-align:center;font-size:22px;"]),G=(0,u.Pi)((function(e){var n=e.tasks;return n&&0!==n.length?(0,s.jsx)(s.Fragment,{children:n.map((function(e){return(0,s.jsx)(z,{id:e.id,title:e.title,description:e.description,status:e.status},e.id)}))}):(0,s.jsx)(R,{children:"No tasks available. Create one?"})})),q=p.ZP.div.withConfig({displayName:"TasksView__TasksWrapper",componentId:"sc-1env3k2-0"})(["width:100%;max-width:860px;margin:auto;padding:20px;box-sizing:border-box;"]),X=p.ZP.div.withConfig({displayName:"TasksView__TasksHeader",componentId:"sc-1env3k2-1"})(["display:flex;justify-content:center;border-bottom:3px solid #757c87;"]),A=p.ZP.h1.withConfig({displayName:"TasksView__Title",componentId:"sc-1env3k2-2"})(["width:100%;color:#edf4ff;"]),B=p.ZP.div.withConfig({displayName:"TasksView__CreateButtonContainer",componentId:"sc-1env3k2-3"})(["width:100%;display:flex;justify-content:flex-end;align-items:center;"]),H=p.ZP.div.withConfig({displayName:"TasksView__TasksContainer",componentId:"sc-1env3k2-4"})(["padding-top:20px;"]),L=p.ZP.div.withConfig({displayName:"TasksView__SignOutIconContainer",componentId:"sc-1env3k2-5"})(["margin-left:10px;.signOutIcon{fill:#edf4ff;}"]),W=(0,u.Pi)((function(){var e=(0,d.useRouter)(),n=(0,v.rs)(),t=(0,v.h_)(),i=t.fetchTasks,a=t.signOut,u=r.useState({status:"",search:""}),p=(0,l.Z)(u,2),m=p[0],k=p[1],g=function(e){return n.setTasks(e)};return r.useEffect((function(){(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(m,g);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0.message),console.trace(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[m]),(0,s.jsxs)(q,{children:[(0,s.jsxs)(X,{children:[(0,s.jsx)(A,{children:"Get things done."}),(0,s.jsxs)(B,{children:[(0,s.jsxs)(h.Z,{variant:"extended",onClick:(0,o.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.push("/tasks/create");case 2:case"end":return n.stop()}}),n)}))),children:[(0,s.jsx)(x.Z,{}),"Create Task"]}),(0,s.jsx)(L,{children:(0,s.jsx)(f.Z,{onClick:a,children:(0,s.jsx)(j.Z,{className:"signOutIcon"})})})]})]}),(0,s.jsx)(N,{filters:m,setFilters:k}),(0,s.jsx)(H,{children:(0,s.jsx)(G,{tasks:n.tasks})})]})})),J=function(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)(W,{})})}},5484:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tasks",function(){return t(1421)}])}},function(e){e.O(0,[774,307,364,439,888,179],(function(){return n=5484,e(e.s=n);var n}));var n=e.O();_N_E=n}]);