import './App.css'
import { useRecoilValue,RecoilRoot, useRecoilState, useRecoilCallback, useSetRecoilState } from 'recoil'
import { jobsAtom, messageAtom, networkAtom, notifiAtom, totalnoticontSelector} from './atmos'
import { useCallback, useEffect, useState } from 'react';

function App() {

  return (
      <RecoilRoot>
        <Navbarbtns/>
      </RecoilRoot>
  )
}

function MainApp(){
  const [netWorkCount, setNetWorkCount] = useRecoilState(Notifications);
  const totalnotificationCount = useRecoilValue(totalNotificationSelector); 
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/notifications")
    .then(res=>{
      setNetWorkCount(res.data);
    })
  })
}


function Navbarbtns() {
  const networkNotiCount = useRecoilValue(networkAtom);
  const jobsNotiCount = useRecoilValue(jobsAtom);
  const messageNotiCount = useRecoilValue(messageAtom);
  const NotifiCount= useRecoilValue(notifiAtom);
  // const totalnotiAvtar = useEffect(()=>{
  //     return useRecoilValue(totalnoticontSelector)
  // },[networkNotiCount,jobsNotiCount,messageNotiCount,NotifiCount])

  const totalnotiAvtar = useRecoilValue(totalnoticontSelector)
   
  return <div>
      <button>Home</button>
      <button>My network {networkNotiCount >= 100 ? "99+" : networkNotiCount}</button>
      <button>Jobs {jobsNotiCount >= 100 ? "99+" : jobsNotiCount}</button>
      <button>Messaging {messageNotiCount >= 100 ? "99+" : messageNotiCount}</button>
      <button>Notifications {NotifiCount >= 100 ? "99+" : NotifiCount}</button>
      <button>Me {totalnotiAvtar>= 200 ? "199+" : totalnotiAvtar }</button>
    </div>
}

export default App