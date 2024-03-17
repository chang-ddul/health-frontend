import GlobalStyle from "./styles/GlobalStyle";
import BasicLayout from "./components/Layout/BasicLayout";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <>
            <GlobalStyle />
            <BasicLayout>
                <AppRouter />
            </BasicLayout>
        </>
    );
}
export default App;
