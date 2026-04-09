"use client";

import { useState } from 'react';

export const useMenuToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 開く
  const openMenu = () => setIsOpen(true);
  // 閉じる
  const closeMenu = () => setIsOpen(false);

  return {
    isOpen,
    openMenu,
    closeMenu,
  };
};