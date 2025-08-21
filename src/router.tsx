import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { IndexPage } from './views/IndexPage';
import { ProjectDetailPage } from './views/ProjectDetailPage';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} index />
                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetailPage />}
                    />
                    <Route path="*" element={<IndexPage />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
