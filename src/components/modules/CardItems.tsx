'use client'
import React from 'react';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '@/redux/Cartslice';
import { state } from '@/redux/Cartslice';

type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function CardItems() {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch;

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item: CartItem) => (
          <CardItem
            key={item.id}
            title={item.name}
            description={item.description || 'No description'}
            price={item.price}
            image={item.image || 'default-image-url.jpg'} // Re-added image prop
            onRemove={() => handleRemove(item.id)}
          />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

const CardItem = ({
  title,
  description,
  price,
  image,
  onRemove,
}: {
  title: string;
  description: string;
  price: number;
  image: string;
  onRemove: () => void;
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="w-16 h-16" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">${price}</p>
      </div>
      <Button variant={"destructive"} onClick={onRemove}>
        <Trash2 />
      </Button>
    </div>
  );
};
