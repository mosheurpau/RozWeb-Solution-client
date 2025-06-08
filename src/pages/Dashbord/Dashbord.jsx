import { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        'https://rozweb-solution-server.onrender.com/contacts'
      );
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white mt-10">
        Loading contact data...
      </div>
    );
  }

  return (
    <section className="bg-black min-h-screen text-white py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Contact Form Submissions
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4 border">Name</th>
              <th className="py-3 px-4 border">Company</th>
              <th className="py-3 px-4 border">Email</th>
              <th className="py-3 px-4 border">Phone</th>
              <th className="py-3 px-4 border">Details</th>
              <th className="py-3 px-4 border">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className="text-center border-t border-gray-600 hover:bg-gray-700">
                <td className="py-2 px-4">{contact.name}</td>
                <td className="py-2 px-4">{contact.company}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.phone}</td>
                <td className="py-2 px-4">{contact.projectDetails}</td>
                <td className="py-2 px-4">
                  {new Date(contact.submittedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
