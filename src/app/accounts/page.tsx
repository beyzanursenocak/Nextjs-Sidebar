import { Accounts, columns } from "./columns"
import { DataTable } from "../../components/data-table"

async function getData(): Promise<Accounts[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="my-5">Accounts</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
