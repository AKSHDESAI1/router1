import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Base from './components/pages/Base'
import Charusat from './components/pages/Charusat'
import College from './components/College'
import Cspit from './components/pages/Cspit'
import Depstar from './components/pages/Depstar'
import Sem from './components/pages/Sem'
import Sem5 from './components/pages/Sem5'
import Os from './components/pages/Os'
import Rikitamaam from './components/pages/Rikitamaam'
import Se from './components/pages/Se'
import Daa from './components/pages/Daa'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route path="charusat" element={<Charusat />}>
              <Route path="college" element={<College />}>
                <Route path="cspit" element={<Cspit />} >
                  <Route path="sem" element={<Sem />} >
                    <Route path="fifthsem" element={<Sem5 />} >
                      <Route path="os" element={<Os />} >
                        <Route path="rikitamaam" element={<Rikitamaam image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Qt8iMgSOtNuIsvdAquDXceqSJ7YaJ-vr2g&usqp=CAU" />} />
                        <Route path="saritamaam" element={<Rikitamaam image="https://lh3.googleusercontent.com/a-/AFdZucoz4kgxZwbB_iWm8W3yVeaOt_OLlEjqN_Dav3-q=s40-p" />} />
                      </Route>
                      <Route path="se" element={<Se />} >
                        <Route path="snehamaam" element={<Rikitamaam image="https://lh3.googleusercontent.com/a-/AFdZucoRqQ26ojIuBW7uALpnCVVJJiCfU-7FKbyWIBL7=s40-p" />} />
                      </Route>
                      <Route path="daa" element={<Daa />} >
                        <Route path="vaishalimaam" element={<Rikitamaam image="https://lh3.googleusercontent.com/a-/AFdZucqZBAX48HYu5ZA5ekwlAXOx-OyLg8-BENAMllwJoA=s40-p" />} />
                        <Route path="nikitamaam" element={<Rikitamaam image="https://lh3.googleusercontent.com/a/default-user=s40-p" />} />
                      </Route>
                    </Route>
                  </Route>
                </Route>
                <Route path="depstar" element={<Depstar />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App