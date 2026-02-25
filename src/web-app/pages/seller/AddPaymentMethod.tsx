import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/credit-card.css';

export function AddPaymentMethod() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState<any>(null);
  const [currentCardBackground] = useState(Math.floor(Math.random() * 25) + 1);

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

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const refKey = e.currentTarget.dataset.ref;
    let targetRef: React.RefObject<any> | null = null;
    
    if (refKey === 'cardNumber') targetRef = cardNumberRef;
    if (refKey === 'cardName') targetRef = cardNameRef;
    if (refKey === 'cardDate') targetRef = cardDateRef;

    if (targetRef && targetRef.current) {
      setFocusElementStyle({
        width: `${targetRef.current.offsetWidth}px`,
        height: `${targetRef.current.offsetHeight}px`,
        transform: `translateX(${targetRef.current.offsetLeft}px) translateY(${targetRef.current.offsetTop}px)`
      });
    }
  };

  const blurInput = () => {
    setFocusElementStyle(null);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const mask = getCardType === 'amex' ? amexCardMask : otherCardMask;
    let formatted = '';
    let j = 0;
    for (let i = 0; i < mask.length && j < v.length; i++) {
        if (mask[i] === '#') {
            formatted += v[j];
            j++;
        } else {
            formatted += mask[i];
        }
    }
    return formatted;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd process the payment method here
    navigate('/constructor/seller/billing');
  };

  // Base URL for external assets
  const ASSETS_BASE = 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images';

  return (
    <div className="min-h-screen bg-[#f4f5f2] py-12 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <button 
          onClick={() => navigate('/constructor/seller/billing')}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-[#576856] font-bold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Billing</span>
        </button>

        <div className="wrapper" id="app">
          <div className="card-form">
            <div className="card-list">
              <div className={`card-item ${isCardFlipped ? '-active' : ''}`}>
                <div className="card-item__side -front">
                  <div 
                    className={`card-item__focus ${focusElementStyle ? '-active' : ''}`}
                    style={focusElementStyle}
                  ></div>
                  <div className="card-item__cover">
                    <img 
                      src={`${ASSETS_BASE}/${currentCardBackground}.jpeg`} 
                      className="card-item__bg" 
                      alt="Card Background"
                    />
                  </div>
                  
                  <div className="card-item__wrapper">
                    <div className="card-item__top">
                      <img 
                        src={`${ASSETS_BASE}/chip.png`} 
                        className="card-item__chip" 
                        alt="Chip"
                      />
                      <div className="card-item__type">
                         <AnimatePresence mode='wait'>
                            <motion.img 
                                key={getCardType}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                src={`${ASSETS_BASE}/${getCardType}.png`} 
                                className="card-item__typeImg" 
                                alt={getCardType}
                            />
                         </AnimatePresence>
                      </div>
                    </div>
                    
                    <label htmlFor="cardNumber" className="card-item__number" ref={cardNumberRef}>
                        {generateCardNumberMask.split('').map((n, index) => {
                          let displayChar = n;
                          const actualChar = cardNumber[index];
                          
                          if (actualChar) {
                            const isMasked = getCardType === 'amex' 
                                ? (index > 4 && index < 14 && n.trim() !== '')
                                : (index > 4 && index < 15 && n.trim() !== '');
                            displayChar = isMasked ? '*' : actualChar;
                          }
                          
                          return (
                            <div
                                key={index}
                                className={`card-item__numberItem ${n.trim() === '' ? '-active' : ''}`}
                            >
                                <AnimatePresence mode='popLayout'>
                                    <motion.span
                                        key={`${index}-${displayChar}`}
                                        initial={{ y: 15, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -15, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {displayChar}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                          );
                        })}
                    </label>

                    <div className="card-item__content">
                      <label htmlFor="cardName" className="card-item__info" ref={cardNameRef}>
                        <div className="card-item__holder">Card Holder</div>
                        <div className="card-item__name">
                            <AnimatePresence mode='wait'>
                            {cardName.length > 0 ? (
                                <motion.div 
                                    key="name-content"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    className="card-item__name"
                                >
                                    {cardName.split('').map((n, index) => (
                                        <motion.span 
                                            key={index}
                                            initial={{ x: 10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="card-item__nameItem"
                                        >
                                            {n}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="placeholder"
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    className="card-item__name"
                                >
                                    Full Name
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                      </label>

                      <div className="card-item__date" ref={cardDateRef}>
                        <label htmlFor="cardMonth" className="card-item__dateTitle">Expires</label>
                        <label htmlFor="cardMonth" className="card-item__dateItem">
                           <AnimatePresence mode='wait'>
                            <motion.span 
                                key={cardMonth || 'mm'}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                            >
                                {cardMonth || 'MM'}
                            </motion.span>
                           </AnimatePresence>
                        </label>
                        /
                        <label htmlFor="cardYear" className="card-item__dateItem">
                           <AnimatePresence mode='wait'>
                             <motion.span 
                                key={cardYear || 'yy'}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                             >
                                {cardYear ? cardYear.toString().slice(2,4) : 'YY'}
                             </motion.span>
                           </AnimatePresence>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-item__side -back">
                  <div className="card-item__cover">
                    <img 
                      src={`${ASSETS_BASE}/${currentCardBackground}.jpeg`} 
                      className="card-item__bg" 
                      alt="Card Background"
                    />
                  </div>
                  <div className="card-item__band"></div>
                  <div className="card-item__cvv">
                      <div className="card-item__cvvTitle">CVV</div>
                      <div className="card-item__cvvBand">
                        {cardCvv.split('').map((_, index) => (
                          <span key={index}>*</span>
                        ))}
                      </div>
                      <div className="card-item__type">
                         <img 
                            src={`${ASSETS_BASE}/${getCardType}.png`} 
                            className="card-item__typeImg" 
                            alt={getCardType}
                         />
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card-form__inner">
              <div className="card-input">
                <label htmlFor="cardNumber" className="card-input__label">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber" 
                  className="card-input__input" 
                  autoComplete="off"
                  value={cardNumber}
                  data-ref="cardNumber"
                  onChange={handleCardNumberChange}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  maxLength={19}
                />
              </div>
              <div className="card-input">
                <label htmlFor="cardName" className="card-input__label">Card Holders</label>
                <input 
                  type="text" 
                  id="cardName" 
                  className="card-input__input" 
                  autoComplete="off"
                  value={cardName}
                  data-ref="cardName"
                  onChange={(e) => setCardName(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </div>
              <div className="card-form__row">
                <div className="card-form__col">
                  <div className="card-form__group">
                    <label htmlFor="cardMonth" className="card-input__label">Expiration Date</label>
                    <select 
                      className="card-input__input -select" 
                      id="cardMonth"
                      value={cardMonth}
                      data-ref="cardDate"
                      onChange={(e) => setCardMonth(e.target.value)}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    >
                      <option value="" disabled>Month</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        const m = (i + 1).toString().padStart(2, '0');
                        return <option key={m} value={m}>{m}</option>;
                      })}
                    </select>
                    <select 
                      className="card-input__input -select" 
                      id="cardYear"
                      value={cardYear}
                      data-ref="cardDate"
                      onChange={(e) => setCardYear(e.target.value)}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    >
                      <option value="" disabled>Year</option>
                      {Array.from({ length: 12 }, (_, i) => {
                        const y = (minCardYear + i).toString();
                        return <option key={y} value={y}>{y}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="card-form__col -cvv">
                  <div className="card-input">
                    <label htmlFor="cardCvv" className="card-input__label">CVV</label>
                    <input 
                      type="text" 
                      className="card-input__input" 
                      id="cardCvv" 
                      maxLength={4}
                      autoComplete="off"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                      onFocus={() => setIsCardFlipped(true)}
                      onBlur={() => setIsCardFlipped(false)}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="card-form__button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

