import Filters from "./components/filters";
import Table from "./components/data-table";
import Header from "./components/header";
import Tittle from "./components/tittle";


export default function App (params) {
  return (
    <>
    <Header />
    <Tittle />
    <Filters />
    <Table />
    </>
  )
}
