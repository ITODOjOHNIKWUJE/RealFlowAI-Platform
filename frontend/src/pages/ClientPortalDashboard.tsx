import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { FileText, Download, MessageSquare, LogOut } from 'lucide-react';
import { useAuth, useClientResources, useClientMessages, useSendClientMessage, useClientProject } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const ClientPortalDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [messageText, setMessageText] = useState('');
  
  // Fetch client data
  const { 
    data: resources, 
    refetch: refetchResources, 
    isLoading: resourcesLoading 
  } = useClientResources();
  
  const { 
    data: messages, 
    refetch: refetchMessages, 
    isLoading: messagesLoading 
  } = useClientMessages();
  
  const { 
    data: project, 
    refetch: refetchProject, 
    isLoading: projectLoading 
  } = useClientProject();
  
  const sendMessageMutation = useSendClientMessage();

  // Fetch data on component mount
  useEffect(() => {
    refetchResources();
    refetchMessages();
    refetchProject();
  }, [refetchResources, refetchMessages, refetchProject]);

  const handleLogout = async () => {
    await logout();
    navigate('/portal');
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageText.trim()) return;
    
    try {
      await sendMessageMutation.mutateAsync({ content: messageText });
      setMessageText('');
      refetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
          <p className="text-gray-600">{user?.company}</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="border-gray-300 text-gray-700"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Project Status */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-bold mb-4">Project Status</h3>
            {projectLoading ? (
              <p className="text-gray-500">Loading project status...</p>
            ) : project ? (
              <>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Current Status</p>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${
                      project.status === 'completed' ? 'bg-green-500' : 
                      project.status === 'in_progress' ? 'bg-blue-500' : 'bg-yellow-500'
                    }`}></div>
                    <p className="font-medium capitalize">{project.status.replace('_', ' ')}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Next Steps</p>
                  <p>{project.next_steps || 'No next steps specified.'}</p>
                </div>
              </>
            ) : (
              <p className="text-gray-500">No project information available.</p>
            )}
          </div>

          {/* Resources */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            {resourcesLoading ? (
              <p className="text-gray-500">Loading resources...</p>
            ) : resources && resources.length > 0 ? (
              <div className="space-y-4">
                {resources.map((resource: any) => (
                  <div key={resource.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">{resource.name}</p>
                        <p className="text-sm text-gray-600">{new Date(resource.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <a 
                      href={`/api/client/resources/${resource.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No resources available yet.</p>
            )}
          </div>
        </div>

        {/* Messages */}
        <div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-4">Messages</h3>
            <div className="space-y-4 mb-6 flex-grow overflow-y-auto max-h-80">
              {messagesLoading ? (
                <p className="text-gray-500">Loading messages...</p>
              ) : messages && messages.length > 0 ? (
                messages.map((message: any) => (
                  <div 
                    key={message.id} 
                    className={`p-4 rounded-lg ${
                      message.is_from_admin ? 'bg-blue-50' : 'bg-gray-50 ml-4'
                    }`}
                  >
                    <p className="text-gray-800 mb-2">{message.content}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(message.created_at).toLocaleString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No messages yet.</p>
              )}
            </div>
            <form onSubmit={handleSendMessage} className="mt-auto">
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition mb-3"
                placeholder="Type your message here..."
                rows={3}
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              ></textarea>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                disabled={sendMessageMutation.isLoading || !messageText.trim()}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                {sendMessageMutation.isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortalDashboard;
