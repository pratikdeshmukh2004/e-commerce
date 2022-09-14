/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Cart({ open, onClose, cartProducts, addProductCart }) {
  console.log(open);
  return (
    <div className="fixed w-full z-10">
      <Popover>
        <>
          {/* Use the `Transition` component. */}
          <Transition
            show={open}
            afterLeave={() => {
              onClose(false);
            }}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-45 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* Mark this component as `static` */}
            <Popover.Panel static>
              <div className="fixed top-16 right-0 max-w-full pl-10">
                <div className="bg-gray-100  dark:bg-gray-900 py-2">
                  <div className="flex-1 z-50 px-4 sm:px-6 relative">
                    <div className="flex items-start justify-between text-lg font-medium text-gray-900 dark:text-gray-200">
                      Shopping Cart
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => onClose(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y overflow-y-auto max-h-56 remove-scroll"
                        >
                          {cartProducts.length ? (
                            cartProducts.map((product) => (
                              <li key={product.id} className="flex py-2">
                                <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border border-gray-300 dark:border-gray-300">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-gray-200">
                                      <h3>
                                        <a href={product.href}>
                                          {product.name}
                                        </a>
                                      </h3>
                                      <p className="ml-4">₹{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() => {
                                          addProductCart(
                                            cartProducts.filter(
                                              (p) => p.id != product.id
                                            )
                                          );
                                        }}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-rose-700"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          ) : (
                            <div>
                              <Image
                                src={"/empty_cart.png"}
                                width={270}
                                height={200}
                              />
                            </div>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pt-10 pb-2 px-2 sm:px-6">
                  {cartProducts.length ? (
                      <div
                        onClick={() => {
                          addProductCart([]);
                        }}
                        className="mt-2 text-sm text-blue-700  cursor-pointer py-1  text-center font-lg hover:text-rose-800"
                      >
                        Clear Cart
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200">
                      <p>Subtotal</p>
                      <p>
                        ₹
                        {cartProducts.reduce(
                          (i, j) => Number(i) + Number(j.price),
                          0
                        )}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                   
                    <div className="mt-4">
                      <a
                        href="#"
                        className="flex items-center justify-center border border-transparent bg-gray-300 px-3 py-1 text-base font-medium text-black shadow-sm hover:bg-gray-400"
                      >
                        View Cart
                      </a>
                      {cartProducts.length ? (
                        <a
                          href="/checkout"
                          className="flex mt-3 items-center justify-center border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
}
