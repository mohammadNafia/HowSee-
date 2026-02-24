import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hello! I'm your Howsee assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'How do I create a 3D tour?',
    'Pricing plans',
    'Privacy settings',
    'Technical support'
  ];

  const botResponses: { [key: string]: string } = {
    'how do i create a 3d tour': "Great question! Creating a 3D tour is easy:\n\n1. Go to 'Upload Property'\n2. Fill in property details\n3. Upload your 360° images\n4. Our system automatically generates the tour\n5. Share your private tour link!\n\nThe whole process takes about 5 minutes. 🎯",
    'pricing plans': "We have 3 flexible plans:\n\n💚 Starter - $29/mo\n- Up to 3 listings\n- Basic analytics\n\n⭐ Professional - $79/mo (Most Popular)\n- Up to 10 listings\n- Advanced features\n\n🚀 Enterprise - $199/mo\n- Unlimited listings\n- White label option\n\nAll plans include 3D tours and mobile access!",
    'privacy settings': "Your privacy is our priority! 🔒\n\n✓ Hide exact addresses\n✓ Verified buyers only\n✓ Private tour links\n✓ Control contact visibility\n\nYou can manage all privacy settings in the Privacy tab of your dashboard.",
    'technical support': "I'm here to help! For technical issues:\n\n📧 Email: support@Howsee.com\n📞 Phone: +1 (555) 123-4567\n💬 Live chat available 24/7\n\nOr describe your issue here and I'll do my best to assist!",
    default: "I understand you're asking about that. Let me connect you with our support team who can provide detailed assistance. You can also:\n\n• Check our FAQ section\n• Email us at support@Howsee.com\n• Call +1 (555) 123-4567\n\nIs there anything else I can help you with?"
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const responseKey = inputValue.toLowerCase();
      let responseText = botResponses.default;

      for (const [key, value] of Object.entries(botResponses)) {
        if (responseKey.includes(key)) {
          responseText = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-primary to-[#103D3E] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center z-50 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
            1
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col z-50 animate-in slide-in-from-bottom-4">
          <div className="bg-gradient-to-r from-primary to-[#103D3E] p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="font-semibold">Howsee Assistant</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'bot' 
                    ? 'bg-gradient-to-br from-primary to-[#103D3E] text-white' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {message.sender === 'bot' ? (
                    <Bot className="w-5 h-5" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div className={`flex-1 ${message.sender === 'user' ? 'flex justify-end' : ''}`}>
                  <div className={`inline-block max-w-[75%] p-3 rounded-2xl ${
                    message.sender === 'bot'
                      ? 'bg-card border border-border'
                      : 'bg-primary text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'bot' ? 'text-muted-foreground' : 'text-white/70'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-xs transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by Howsee AI
            </p>
          </div>
        </div>
      )}
    </>
  );
}
