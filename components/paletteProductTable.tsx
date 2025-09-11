interface Product {
  id: string;
  name: string;
  material: string;
  usage: string;
  features: string;
  weightCapacity: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-collapse border border-gray-300 bg-white shadow-lg'>
        <thead>
          <tr className='bg-primary-100'>
            <th className='border border-gray-300 px-4 py-3 text-left font-bold text-primary-950 bg-primary-200'>
              품명
            </th>
            <th className='border border-gray-300 px-4 py-3 text-left font-bold text-primary-950 bg-primary-200'>
              재질
            </th>
            <th className='border border-gray-300 px-4 py-3 text-left font-bold text-primary-950 bg-primary-200'>
              용도
            </th>
            <th className='border border-gray-300 px-4 py-3 text-left font-bold text-primary-950 bg-primary-200'>
              특징
            </th>
            <th className='border border-gray-300 px-4 py-3 text-left font-bold text-primary-950 bg-primary-200'>
              적재 중량
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className='border border-gray-300 px-4 py-3 font-semibold text-primary-800'>{product.name}</td>
              <td className='border border-gray-300 px-4 py-3 text-gray-700'>{product.material}</td>
              <td className='border border-gray-300 px-4 py-3 text-gray-700'>{product.usage}</td>
              <td className='border border-gray-300 px-4 py-3 text-gray-700'>{product.features}</td>
              <td className='border border-gray-300 px-4 py-3 text-gray-700'>{product.weightCapacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
