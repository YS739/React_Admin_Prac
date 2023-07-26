import { useLoaderData } from "react-router-dom";
import AdminDataTable from "../components/AdminDataTable";
import { useState } from "react";

const AdminData = () => {
  const adminData = useLoaderData();

  const [sortOrder, setSortOrder] = useState(adminData);

  // 정렬 기준 변경 시 작동하는 함수
  const onChangeSortHandler = (sort) => {
    // 성함 내림차순
    if (sort === "성함 내림차순") {
      setSortOrder(
        [...sortOrder].sort((a, b) => b.author.localeCompare(a.author))
      );
    }

    // 성함 오름차순
    if (sort === "성함 오름차순") {
      setSortOrder(
        [...sortOrder].sort((a, b) => a.author.localeCompare(b.author))
      );
    }
  };

  return (
    <div>
      {/* 카테고리 선택 */}
      <div>
        <select
          id="adminSort"
          name="adminSort"
          defaultValue="성함 내림차순"
          onChange={(e) => onChangeSortHandler(e.target.value)}
        >
          <option value="성함 내림차순">성함 내림차순</option>
          <option value="성함 오름차순">성함 오름차순</option>
        </select>
      </div>
      {/* adminData Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>author</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {sortOrder.map((data) => (
            <AdminDataTable key={data.id} adminData={data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminData;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
