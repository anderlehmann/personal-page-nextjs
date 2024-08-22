export function generateStaticParams() {
  const ids = ['1', '2', '3'];
  const result = ids.map(id => ({ id }));
  // console.log(result);
  return result;
}

export default function Teste() {
  return (
    <h1>Olá Mundo</h1>
  )
}