import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Hash, Lock } from 'lucide-react';

interface CreditCardFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function CreditCardForm({ onClose, onSubmit }: CreditCardFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState<React.CSSProperties | null>(null);

  const cardNumberRef = useRef<HTMLLabelElement>(null);
  const cardNameRef = useRef<HTMLLabelElement>(null);
  const cardDateRef = useRef<HTMLDivElement>(null);

  const minCardYear = new Date().getFullYear();
  const amexCardMask = "#### ###### #####";
  const otherCardMask = "#### #### #### ####";

  const getCardType = useMemo(() => {
    let number = cardNumber;
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";

    re = new RegExp('^9792');
    if (number.match(re) != null) return 'troy';

    return "visa"; // default
  }, [cardNumber]);

  const generateCardNumberMask = useMemo(() => {
    return getCardType === "amex" ? amexCardMask : otherCardMask;
  }, [getCardType]);

  const handleFocusSelection = (ref: React.RefObject<any>) => {
    if (ref.current) {
      setFocusElementStyle({
        width: `${ref.current.offsetWidth}px`,
        height: `${ref.current.offsetHeight}px`,
        transform: `translateX(${ref.current.offsetLeft}px) translateY(${ref.current.offsetTop}px)`,
        opacity: 1
      });
    }
  };

  const handleBlur = () => {
    setFocusElementStyle(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-[480px] bg-[#f4f5f2] rounded-[40px] shadow-2xl overflow-hidden p-6 sm:p-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-10">
          {/* Card Preview */}
          <div className="relative w-full h-[240px] mx-auto z-10 perspective-1000 group">
             <motion.div 
                className="relative w-full h-full preserve-3d transition-transform duration-700"
                animate={{ rotateY: isCardFlipped ? 180 : 0 }}
             >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-[#576856] rounded-[24px] overflow-hidden p-8 flex flex-col justify-between text-white shadow-xl border border-white/10">
                   <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                   </div>

                   <div 
                      className="absolute inset-0 border-2 border-white/30 rounded-[24px] pointer-events-none transition-all duration-300"
                      style={focusElementStyle || { opacity: 0 }}
                   />

                   <div className="relative flex justify-between items-start">
                      <div className="w-16 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                         <div className="w-10 h-8 bg-yellow-500/80 rounded-md" /> {/* Chip */}
                      </div>
                      <div className="text-right h-12 flex items-center">
                         <span className="font-black text-2xl tracking-tighter italic opacity-80 uppercase">{getCardType}</span>
                      </div>
                   </div>

                   <label 
                      ref={cardNumberRef}
                      className="relative block text-2xl font-black tracking-[0.2em] py-2 cursor-pointer h-12"
                   >
                      <AnimatePresence mode='popLayout'>
                        {generateCardNumberMask.split('').map((char, i) => {
                          let displayChar = char;
                          if (cardNumber[i]) displayChar = cardNumber[i];
                          if (i > 4 && i < 15 && cardNumber[i] && char !== ' ') displayChar = '*';
                          
                          return (
                            <motion.span
                              key={`${i}-${displayChar}`}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              className="inline-block min-w-[0.6em]"
                            >
                              {displayChar}
                            </motion.span>
                          );
                        })}
                      </AnimatePresence>
                   </label>

                   <div className="relative flex justify-between items-end">
                      <label 
                        ref={cardNameRef}
                        className="flex flex-col cursor-pointer min-w-0 flex-1 pr-4"
                      >
                         <span className="text-[10px] uppercase font-black text-white/50 tracking-widest mb-1">Card Holder</span>
                         <span className="font-bold truncate h-6">
                            {cardName || "FULL NAME"}
                         </span>
                      </label>
                      <div 
                        ref={cardDateRef}
                        className="flex flex-col items-end cursor-pointer shrink-0"
                      >
                         <span className="text-[10px] uppercase font-black text-white/50 tracking-widest mb-1">Expires</span>
                         <span className="font-bold h-6">
                            {cardMonth || "MM"} / {cardYear ? cardYear.slice(2,4) : "YY"}
                         </span>
                      </div>
                   </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden bg-gray-900 rounded-[24px] overflow-hidden flex flex-col shadow-xl border border-gray-800 rotate-y-180">
                   <div className="h-14 w-full bg-black/80 mt-8" />
                   <div className="p-8 flex flex-col items-end gap-2">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest">CVV</span>
                      <div className="h-12 w-full bg-white rounded-lg flex items-center justify-end px-4 text-gray-900 font-bold tracking-[0.5em]">
                         {cardCvv.split('').map(() => '*').join('')}
                      </div>
                      <div className="mt-4 flex flex-col items-end opacity-50">
                         <span className="text-white text-[10px] uppercase italic font-bold">Secure Payment</span>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* Form Inner */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Card Number</label>
            <div className={`flex items-center gap-4 bg-[#f4f5f2] rounded-2xl px-6 py-4 border-2 transition-all ${focusElementStyle && focusElementStyle.transform?.includes('cardNumber') ? 'border-[#576856]' : 'border-transparent'}`}>
               <Hash className="w-5 h-5 text-gray-400" />
               <input 
                  type="text"
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
                  onFocus={() => handleFocusSelection(cardNumberRef)}
                  onBlur={handleBlur}
                  placeholder="0000 0000 0000 0000"
                  className="w-full bg-transparent outline-none font-bold text-gray-900 placeholder:text-gray-300"
               />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Card Holders</label>
            <div className="flex items-center gap-4 bg-[#f4f5f2] rounded-2xl px-6 py-4 border-2 border-transparent focus-within:border-[#576856] transition-all">
               <User className="w-5 h-5 text-gray-400" />
               <input 
                  type="text"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  onFocus={() => handleFocusSelection(cardNameRef)}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className="w-full bg-transparent outline-none font-bold text-gray-900 placeholder:text-gray-300"
               />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Expiration Date</label>
              <div className="grid grid-cols-2 gap-3" onFocus={() => handleFocusSelection(cardDateRef)} onBlur={handleBlur}>
                 <select 
                    value={cardMonth}
                    onChange={(e) => setCardMonth(e.target.value)}
                    className="bg-[#f4f5f2] rounded-2xl px-4 py-4 font-bold outline-none border-2 border-transparent focus:border-[#576856] transition-all appearance-none"
                 >
                    <option value="" disabled>MM</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const m = (i + 1).toString().padStart(2, '0');
                      return <option key={m} value={m}>{m}</option>;
                    })}
                 </select>
                 <select 
                    value={cardYear}
                    onChange={(e) => setCardYear(e.target.value)}
                    className="bg-[#f4f5f2] rounded-2xl px-4 py-4 font-bold outline-none border-2 border-transparent focus:border-[#576856] transition-all appearance-none"
                 >
                    <option value="" disabled>YY</option>
                    {Array.from({ length: 12 }, (_, i) => {
                      const y = (minCardYear + i).toString();
                      return <option key={y} value={y}>{y}</option>;
                    })}
                 </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">CVV</label>
              <div className="flex items-center gap-4 bg-[#f4f5f2] rounded-2xl px-6 py-4 border-2 border-transparent focus-within:border-[#576856] transition-all">
                 <Lock className="w-5 h-5 text-gray-400" />
                 <input 
                    type="text"
                    maxLength={4}
                    value={cardCvv}
                    onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                    onFocus={() => setIsCardFlipped(true)}
                    onBlur={() => setIsCardFlipped(false)}
                    placeholder="***"
                    className="w-full bg-transparent outline-none font-bold text-gray-900 placeholder:text-gray-300"
                 />
              </div>
            </div>
          </div>

          <button 
            onClick={() => onSubmit({ cardNumber, cardName, cardMonth, cardYear, cardCvv })}
            className="w-full bg-[#576856] text-white py-5 rounded-[24px] font-black text-lg shadow-xl shadow-[#576856]/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-4"
          >
            Submit
          </button>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
}
