import DataTable from '../components/DataTable'
import Background from "../assets/images/outdoorSake.jpg"

function Dashboard() {
  return (
    <>
    <DataTable />
      <div style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
        <div className="flex place-items-center h-screen">
        </div>
      </div>
    </>
  )
}

export default Dashboard
