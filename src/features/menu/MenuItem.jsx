import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ coffee }) {
  const { id, name, unitPrice, soldOut, imageUrl } = coffee;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-[80px] w-[80px] object-cover ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Hết hàng
            </p>
          )}

          <Button type="small">Thêm vào giỏ hàng</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;