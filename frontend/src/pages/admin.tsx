import React, { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

interface WaitlistMember {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface SoftwareDeveloper {
  id: string;
  fullName: string;
  email: string;
  graduatingYear: number;
  majors: string;
  minors?: string;
  github?: string;
  linkedIn?: string;
  resumeLink: string;
  hoursPerWeek: number;
  whyBuild: string;
  projectExperience: string;
  technologyToLearn: string;
  createdAt: string;
}

interface ProductManager {
  id: string;
  fullName: string;
  email: string;
  graduatingYear: number;
  majors: string;
  minors?: string;
  linkedIn?: string;
  resumeLink: string;
  hoursPerWeek: number;
  whyBuild: string;
  leadershipExperience: string;
  excitingTechnology: string;
  createdAt: string;
}

interface AdminData {
  waitlist: WaitlistMember[];
  softwareDevelopers: SoftwareDeveloper[];
  productManagers: ProductManager[];
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<AdminData | null>(null);
  const [sdApplicationStatus, setSdApplicationStatus] = useState(false);
  const [pmApplicationStatus, setPmApplicationStatus] = useState(false);
  const [activeTab, setActiveTab] = useState<'waitlist' | 'sd' | 'pm'>('waitlist');

  useEffect(() => {
    if (status === 'authenticated') {
      setShowModal(false);
      fetchData();
      fetchApplicationStatus();
    }
  }, [status]);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/data');
      if (res.ok) {
        const data = await res.json();
        setData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchApplicationStatus = async () => {
    try {
      const res = await fetch('/api/admin/status');
      if (res.ok) {
        const data = await res.json();
        setSdApplicationStatus(data.softwareDeveloper);
        setPmApplicationStatus(data.productManager);
      }
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await signIn('credentials', {
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setError('Incorrect password');
    } else {
      setShowModal(false);
    }
  };

  const handleStatusToggle = async (role: 'software_developer' | 'product_manager') => {
    try {
      const currentStatus = role === 'software_developer' ? sdApplicationStatus : pmApplicationStatus;
      const res = await fetch('/api/admin/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, isOpen: !currentStatus }),
      });
      if (res.ok) {
        const data = await res.json();
        if (role === 'software_developer') {
          setSdApplicationStatus(data.isOpen);
          if (data.isOpen) {
            setActiveTab('sd');
          }
        } else {
          setPmApplicationStatus(data.isOpen);
          if (data.isOpen) {
            setActiveTab('pm');
          }
        }
        // Refresh data to show applications
        fetchData();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-build-red-600 font-montserrat text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Auth Modal */}
      {showModal && status !== 'authenticated' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-build-red-600 mb-6 text-center">
              Admin Access Required
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-build-red-600"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              {error && (
                <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-build-red-600 text-white py-3 rounded-lg font-semibold hover:bg-build-red-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Authenticating...' : 'Access Dashboard'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Dashboard */}
      {status === 'authenticated' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-build-red-600">Admin Dashboard</h1>
            <button
              onClick={() => {
                signOut({ redirect: false }).then(() => {
                  router.push('/');
                });
              }}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Sign Out
            </button>
          </div>

          {/* Application Status Toggles */}
          <div className="bg-white border-2 border-build-red-600 rounded-lg p-6 mb-8 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Application Status</h2>
            
            {/* Software Developer Toggle */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Software Developer</h3>
                <p className="text-gray-600">
                  Applications are currently{' '}
                  <span className={sdApplicationStatus ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                    {sdApplicationStatus ? 'OPEN' : 'CLOSED'}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleStatusToggle('software_developer')}
                className={`relative inline-flex h-12 w-24 items-center rounded-full transition-colors ${
                  sdApplicationStatus ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-10 w-10 transform rounded-full bg-white shadow-lg transition-transform ${
                    sdApplicationStatus ? 'translate-x-12' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Product Manager Toggle */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Product Manager</h3>
                <p className="text-gray-600">
                  Applications are currently{' '}
                  <span className={pmApplicationStatus ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                    {pmApplicationStatus ? 'OPEN' : 'CLOSED'}
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleStatusToggle('product_manager')}
                className={`relative inline-flex h-12 w-24 items-center rounded-full transition-colors ${
                  pmApplicationStatus ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-10 w-10 transform rounded-full bg-white shadow-lg transition-transform ${
                    pmApplicationStatus ? 'translate-x-12' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b-2 border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('waitlist')}
                className={`pb-4 px-2 font-semibold transition-colors ${
                  activeTab === 'waitlist'
                    ? 'text-build-red-600 border-b-4 border-build-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Waitlist ({data?.waitlist.length || 0})
              </button>
              {(sdApplicationStatus || pmApplicationStatus) && (
                <>
                  <button
                    onClick={() => setActiveTab('sd')}
                    className={`pb-4 px-2 font-semibold transition-colors ${
                      activeTab === 'sd'
                        ? 'text-build-red-600 border-b-4 border-build-red-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Software Developers ({data?.softwareDevelopers.length || 0})
                  </button>
                  <button
                    onClick={() => setActiveTab('pm')}
                    className={`pb-4 px-2 font-semibold transition-colors ${
                      activeTab === 'pm'
                        ? 'text-build-red-600 border-b-4 border-build-red-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Product Managers ({data?.productManagers.length || 0})
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Waitlist Tab */}
            {activeTab === 'waitlist' && (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-build-red-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Name</th>
                      <th className="px-6 py-4 text-left">Email</th>
                      <th className="px-6 py-4 text-left">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data?.waitlist.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">{member.name}</td>
                        <td className="px-6 py-4">{member.email}</td>
                        <td className="px-6 py-4">
                          {new Date(member.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Software Developers Tab */}
            {activeTab === 'sd' && sdApplicationStatus && (
              <div className="p-6 space-y-6">
                {data?.softwareDevelopers.map((dev) => (
                  <div key={dev.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-build-red-600">{dev.fullName}</h3>
                        <p className="text-gray-600">{dev.email}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Class of {dev.graduatingYear}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-semibold">Major(s):</span> {dev.majors}
                      </div>
                      {dev.minors && (
                        <div>
                          <span className="font-semibold">Minor(s):</span> {dev.minors}
                        </div>
                      )}
                      <div>
                        <span className="font-semibold">Hours/Week:</span> {dev.hoursPerWeek}
                      </div>
                      {dev.github && (
                        <div>
                          <span className="font-semibold">GitHub:</span>{' '}
                          <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {dev.github}
                          </a>
                        </div>
                      )}
                      {dev.linkedIn && (
                        <div>
                          <span className="font-semibold">LinkedIn:</span>{' '}
                          <a href={dev.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {dev.linkedIn}
                          </a>
                        </div>
                      )}
                      <div>
                        <span className="font-semibold">Resume:</span>{' '}
                        <a href={dev.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View
                        </a>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-build-red-600 mb-1">Why BUILD?</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{dev.whyBuild}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-build-red-600 mb-1">Project Experience</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{dev.projectExperience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-build-red-600 mb-1">Technology to Learn</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{dev.technologyToLearn}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Applied: {new Date(dev.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Product Managers Tab */}
            {activeTab === 'pm' && pmApplicationStatus && (
              <div className="p-6 space-y-6">
                {data?.productManagers.map((pm) => (
                  <div key={pm.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-build-red-600">{pm.fullName}</h3>
                        <p className="text-gray-600">{pm.email}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Class of {pm.graduatingYear}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="font-semibold">Major(s):</span> {pm.majors}
                      </div>
                      {pm.minors && (
                        <div>
                          <span className="font-semibold">Minor(s):</span> {pm.minors}
                        </div>
                      )}
                      <div>
                        <span className="font-semibold">Hours/Week:</span> {pm.hoursPerWeek}
                      </div>
                      {pm.linkedIn && (
                        <div>
                          <span className="font-semibold">LinkedIn:</span>{' '}
                          <a href={pm.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {pm.linkedIn}
                          </a>
                        </div>
                      )}
                      <div>
                        <span className="font-semibold">Resume:</span>{' '}
                        <a href={pm.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View
                        </a>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-build-red-600 mb-1">Why BUILD?</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{pm.whyBuild}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-build-red-600 mb-1">Leadership Experience</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{pm.leadershipExperience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-build-red-600 mb-1">Exciting Technology</h4>
                        <p className="text-gray-700 whitespace-pre-wrap">{pm.excitingTechnology}</p>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Applied: {new Date(pm.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
