import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "7 ngày trước" },
        { value: "30", label: "30 ngày trước" },
        { value: "90", label: "90 ngày trước" },
      ]}
    />
  );
}

export default DashboardFilter;