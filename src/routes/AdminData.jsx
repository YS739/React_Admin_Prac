import { useLoaderData } from "react-router-dom";
import AdminDataTable from "../components/AdminDataTable";

const AdminData = () => {
  const adminData = useLoaderData();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>author</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {adminData.map((data) => (
          <AdminDataTable key={data.id} adminData={data} />
        ))}
      </tbody>
    </table>
  );
};

export default AdminData;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
