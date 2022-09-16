import List from './List';

const ListContainer = () => {
  const data = [
    { id: 1, task: 'Feed The Cat' },
    { id: 2, task: 'Learn React Class Based Components' },
    { id: 3, task: 'Get a Code Review!' },
    { id: 4, task: 'Read Reversible Computing' },
  ];
  return (
    <div className="list-container">
      {
            data.map((item) => (
              <List key={item.id} value={item.task} index={item.id} />))
}
    </div>
  );
};
export default ListContainer;
