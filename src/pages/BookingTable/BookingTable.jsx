import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading/Loading';

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://rozweb-solution-server.onrender.com/allbookingEvents'
        );
        setBookings(response.data.reverse());
      } catch (error) {
        console.error('Error fetching bookings:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'There was an error fetching bookings. Please try again later.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await axios.delete(
          `https://rozweb-solution-server.onrender.com/bookingEvents/${id}`
        );
        setBookings(bookings.filter((booking) => booking._id !== id));
        Swal.fire('Deleted!', 'The booking has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'There was an error deleting the booking. Please try again later.',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pb-4">
      <h1 className="text-3xl font-bold my-10 text-center text-[#6582F6]">
        Booking Details
      </h1>
      {isLoading ? (
        <Loading></Loading>
      ) : bookings.length === 0 ? (
        <p className="text-center text-lg">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-[#3B3B3B] text-[#6582F6]">
                <th className="px-4 py-3">Index</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Telephone</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Occasion</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="bg-black text-sm hover:bg-gray-600 transition-colors duration-200">
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3 text-center">{booking.name}</td>
                  <td className="px-4 py-3 text-center">{booking.email}</td>
                  <td className="px-4 py-3 text-center">{booking.telephone}</td>
                  <td className="px-4 py-3 text-center">{booking.date}</td>
                  <td className="px-4 py-3 text-center">{booking.occasion}</td>
                  <td className="px-4 py-3 text-center">{booking.message}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg transition-colors duration-150"
                      onClick={() => deleteBooking(booking._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingTable;
