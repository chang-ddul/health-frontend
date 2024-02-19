import GlobalStyle from "./styles/GlobalStyle";
import BasicLayout from "./components/Layout/BasicLayout";
import Survey from "./pages/Survey/Survey";
function App() {
    return (
        <>
            <GlobalStyle />
            <BasicLayout>
                <Survey />
            </BasicLayout>
        </>
    );
}
export default App;
