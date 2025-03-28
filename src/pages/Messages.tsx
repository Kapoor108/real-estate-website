
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, User, Clock, ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Sample data - in a real app, this would come from a database
const conversations = [
  {
    id: "c1",
    with: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Hi Jamie! I saw that we have a high compatibility score. Would you be interested in discussing potential roommate opportunities?",
    timestamp: "2 hours ago",
    unread: true,
  },
  {
    id: "c2",
    with: "Taylor Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "The apartment looks great! When can we schedule a viewing?",
    timestamp: "3 hours ago",
    unread: true,
  },
  {
    id: "c3",
    with: "Jordan Smith",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    lastMessage: "Thanks for your interest! I'm looking for someone who is clean and respectful. Do you have any questions about the place?",
    timestamp: "1 day ago",
    unread: false,
  },
  {
    id: "c4",
    with: "Westside Properties",
    avatar: "",
    lastMessage: "Thank you for your interest in our Garden Apartment. We've scheduled your virtual tour for tomorrow at 3 PM.",
    timestamp: "1 day ago",
    unread: false,
  },
];

// Sample messages for a selected conversation
const sampleMessages = [
  {
    id: "m1",
    senderId: "other",
    senderName: "Alex Johnson",
    content: "Hi Jamie! I saw that we have a high compatibility score. Would you be interested in discussing potential roommate opportunities?",
    timestamp: "2 hours ago",
  },
  {
    id: "m2",
    senderId: "me",
    senderName: "Jamie Smith",
    content: "Hi Alex! Yes, I'd definitely be interested in discussing. I'm looking for a place in Downtown.",
    timestamp: "1 hour ago",
  },
  {
    id: "m3",
    senderId: "other",
    senderName: "Alex Johnson",
    content: "Great! I actually have a 2-bedroom apartment in Downtown and I'm looking for a roommate. The rent would be $1,200 per month, all utilities included. The place has a gym and is close to public transit.",
    timestamp: "1 hour ago",
  },
  {
    id: "m4",
    senderId: "me",
    senderName: "Jamie Smith",
    content: "That sounds perfect! Do you have any photos of the apartment that you could share?",
    timestamp: "45 minutes ago",
  },
  {
    id: "m5",
    senderId: "other",
    senderName: "Alex Johnson",
    content: "Yes, I'll send them right away. Would you be available for a video call tour sometime this week?",
    timestamp: "30 minutes ago",
  },
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState(sampleMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showConversations, setShowConversations] = useState(true);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // On mobile, when a conversation is selected, hide the conversation list
    if (isMobile && selectedConversation) {
      setShowConversations(false);
    }
    
    // Scroll to top when scrolling back to conversation list on mobile
    if (isMobile && showConversations) {
      window.scrollTo(0, 0);
    }
  }, [selectedConversation, isMobile, showConversations]);
  
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    const newMsg = {
      id: `m${messages.length + 1}`,
      senderId: "me",
      senderName: "Jamie Smith",
      content: newMessage,
      timestamp: "Just now",
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSelectConversation = (id: string) => {
    setSelectedConversation(id);
    if (isMobile) {
      setShowConversations(false);
    }
  };
  
  const handleBackToConversations = () => {
    setShowConversations(true);
  };
  
  const selectedConversationData = conversations.find(c => c.id === selectedConversation);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-2xl font-bold mb-6">Messages</h1>
          
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <div className="md:grid md:grid-cols-7 md:min-h-[600px]">
              {/* Conversations List - hidden on mobile when viewing a conversation */}
              {(showConversations || !isMobile) && (
                <div className="md:col-span-2 border-r border-border">
                  <Tabs defaultValue="all" className="w-full">
                    <div className="px-4 py-3 border-b border-border">
                      <TabsList className="w-full">
                        <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                        <TabsTrigger value="unread" className="flex-1">
                          Unread
                          <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                            {conversations.filter(c => c.unread).length}
                          </Badge>
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <TabsContent value="all" className="m-0">
                      <div className="divide-y divide-border">
                        {conversations.map((conversation) => (
                          <button
                            key={conversation.id}
                            className={cn(
                              "w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors",
                              selectedConversation === conversation.id && "bg-accent",
                              conversation.unread && "bg-primary/5"
                            )}
                            onClick={() => handleSelectConversation(conversation.id)}
                          >
                            <div className="flex items-start gap-3">
                              <Avatar className="h-10 w-10">
                                {conversation.avatar ? (
                                  <AvatarImage src={conversation.avatar} alt={conversation.with} />
                                ) : (
                                  <AvatarFallback>
                                    {conversation.with.charAt(0)}
                                  </AvatarFallback>
                                )}
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline">
                                  <h3 className={cn(
                                    "font-medium truncate",
                                    conversation.unread && "font-semibold"
                                  )}>
                                    {conversation.with}
                                  </h3>
                                  <span className="text-xs text-muted-foreground">
                                    {conversation.timestamp}
                                  </span>
                                </div>
                                <p className={cn(
                                  "text-sm truncate text-muted-foreground",
                                  conversation.unread && "text-foreground"
                                )}>
                                  {conversation.lastMessage}
                                </p>
                              </div>
                              {conversation.unread && (
                                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="unread" className="m-0">
                      <div className="divide-y divide-border">
                        {conversations.filter(c => c.unread).map((conversation) => (
                          <button
                            key={conversation.id}
                            className={cn(
                              "w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors bg-primary/5",
                              selectedConversation === conversation.id && "bg-accent"
                            )}
                            onClick={() => handleSelectConversation(conversation.id)}
                          >
                            <div className="flex items-start gap-3">
                              <Avatar className="h-10 w-10">
                                {conversation.avatar ? (
                                  <AvatarImage src={conversation.avatar} alt={conversation.with} />
                                ) : (
                                  <AvatarFallback>
                                    {conversation.with.charAt(0)}
                                  </AvatarFallback>
                                )}
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline">
                                  <h3 className="font-semibold truncate">
                                    {conversation.with}
                                  </h3>
                                  <span className="text-xs text-muted-foreground">
                                    {conversation.timestamp}
                                  </span>
                                </div>
                                <p className="text-sm truncate">
                                  {conversation.lastMessage}
                                </p>
                              </div>
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                            </div>
                          </button>
                        ))}
                        
                        {conversations.filter(c => c.unread).length === 0 && (
                          <div className="py-12 text-center">
                            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-lg font-medium mb-1">No unread messages</p>
                            <p className="text-muted-foreground">You're all caught up!</p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
              
              {/* Message View */}
              {(!showConversations || !isMobile) && (
                <div className="md:col-span-5 flex flex-col h-full">
                  {selectedConversation ? (
                    <>
                      {/* Message header */}
                      <div className="border-b border-border p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          {isMobile && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="mr-2"
                              onClick={handleBackToConversations}
                            >
                              <ArrowLeft className="h-5 w-5" />
                            </Button>
                          )}
                          <Avatar className="h-10 w-10 mr-3">
                            {selectedConversationData?.avatar ? (
                              <AvatarImage src={selectedConversationData.avatar} alt={selectedConversationData?.with} />
                            ) : (
                              <AvatarFallback>
                                {selectedConversationData?.with.charAt(0)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <h3 className="font-medium">{selectedConversationData?.with}</h3>
                            <p className="text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 inline-block mr-1" />
                              Last active: {selectedConversationData?.timestamp}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <User className="h-4 w-4 mr-2" />
                          View Profile
                        </Button>
                      </div>
                      
                      {/* Messages */}
                      <ScrollArea className="flex-grow p-4">
                        <div className="space-y-4">
                          {messages.map((message) => (
                            <div 
                              key={message.id}
                              className={cn(
                                "flex",
                                message.senderId === "me" ? "justify-end" : "justify-start"
                              )}
                            >
                              <div className="flex gap-3 max-w-[80%]">
                                {message.senderId !== "me" && (
                                  <Avatar className="h-8 w-8 mt-0.5">
                                    {selectedConversationData?.avatar ? (
                                      <AvatarImage src={selectedConversationData.avatar} alt={message.senderName} />
                                    ) : (
                                      <AvatarFallback>
                                        {message.senderName.charAt(0)}
                                      </AvatarFallback>
                                    )}
                                  </Avatar>
                                )}
                                <div>
                                  <div 
                                    className={cn(
                                      "rounded-lg p-3",
                                      message.senderId === "me" 
                                        ? "bg-primary text-primary-foreground" 
                                        : "bg-accent"
                                    )}
                                  >
                                    <p className="text-sm">{message.content}</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {message.timestamp}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                      
                      {/* Message input */}
                      <div className="border-t border-border p-4">
                        <div className="flex gap-2">
                          <Textarea
                            placeholder="Type your message..."
                            className="min-h-[80px]"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                          />
                          <Button 
                            className="self-end"
                            onClick={handleSendMessage}
                            disabled={newMessage.trim() === ""}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Send
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full py-12">
                      <MessageSquare className="h-16 w-16 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-medium mb-2">Select a conversation</h3>
                      <p className="text-muted-foreground text-center max-w-md">
                        Choose a conversation from the list to start messaging with potential roommates and property managers.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messages;
