import React from 'react';

const WeatherAlert = () => {
  // Dummy data for weather alerts
  const alerts = [
    {
      id: 1,
      type: 'বৃষ্টির সতর্কতা',
      description: 'আগামী ২৪ ঘণ্টায় প্রবল বৃষ্টির সম্ভাবনা।',
      severity: 'উচ্চ',
      actions: [
        'ক্ষেতে সঠিক ড্রেনেজ নিশ্চিত করুন',
        'আবদ্ধ ফসল সুরক্ষিত করুন',
        'কোনো পরিকল্পিত স্প্রেিং কার্যক্রম স্থগিত করুন'
      ]
    },
    {
      id: 2,
      type: 'গরমের সতর্কতা',
      description: 'আগামী ৩ দিন ব্যাপী অত্যধিক তাপমাত্রার সম্ভাবনা।',
      severity: 'মাঝারি',
      actions: [
        'সেচের সময় বৃদ্ধি করুন',
        'সংবেদনশীল ফসলের জন্য ছায়া প্রদান করুন',
        'গরমের কারণে গবাদিপশুর অস্বস্তির লক্ষণ পর্যবেক্ষণ করুন'
      ]
    },
    {
      id: 3,
      type: 'শৈত্য সতর্কতা',
      description: 'রাতের বেলা নিম্নভূমিতে শৈত্যের সম্ভাবনা।',
      severity: 'কম',
      actions: [
        'সংবেদনশীল গাছপালা ঢেকে রাখুন',
        'যতটা সম্ভব পটভূমি গাছপালা ভিতরে সরিয়ে নিন',
        'শৈত্য প্রতিরোধ ব্যবস্থা প্রস্তুত করুন'
      ]
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'উচ্চ':
        return 'bg-red-100 border-red-500 text-red-700';
      case 'মাঝারি':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      case 'কম':
        return 'bg-blue-100 border-blue-500 text-blue-700';
      default:
        return 'bg-gray-100 border-gray-500 text-gray-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">কৃষকদের জন্য আবহাওয়া সতর্কতা</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`border-l-4 p-4 rounded-r-lg shadow-md ${getSeverityColor(alert.severity)}`}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{alert.type}</h3>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-opacity-50 capitalize">
                {alert.severity}
              </span>
            </div>
            <p className="mt-2 text-sm">{alert.description}</p>
            <div className="mt-3">
              <h4 className="font-semibold text-sm">প্রস্তাবিত কার্যক্রম:</h4>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                {alert.actions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAlert;
