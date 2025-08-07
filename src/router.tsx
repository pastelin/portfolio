import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { IndexPage } from './views/IndexPage'

export const AppRouter = () => {
  return (
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />} >
				<Route path='/' element={<IndexPage />} index />
			</Route>
		</Routes>
	</BrowserRouter>
  )
}
