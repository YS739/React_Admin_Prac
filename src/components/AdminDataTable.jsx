const AdminDataTable = ({ adminData }) => {
  return (
    <tr>
      <td>{adminData.id.split(".")[1]}</td>
      <td>{adminData.body}</td>
      <td>{adminData.author}</td>
    </tr>
  );
};

export default AdminDataTable;
