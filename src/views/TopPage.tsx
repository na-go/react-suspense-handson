import { FC, Suspense, memo, useState } from 'react'
import './TopPage.css'
import { RenderingNotifier } from '../components/RenderingNotifier'
import { SometimeRespond } from '../components/SometimeRespond'
import { DataLoader } from '../components/DataLoader'
import { Loadable } from '../utils/loadable'
import { fetchData1 } from '../services/hello'

const TopPage:FC = () => {
  const [data1] = useState(() => new Loadable(fetchData1()));
  const [data2] = useState(() => new Loadable(fetchData1()));
  const [data3] = useState(() => new Loadable(fetchData1()));

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data1} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data2} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <DataLoader data={data3} />
      </Suspense>
    </div>
  )
}

export default memo(TopPage)
