import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { AlbumCreation, User } from '../redux/reducers/authReducer'
import { Api, useAppSelector } from '../redux/store'
import { Song } from '../redux/reducers/songReducer'
import axiosInstance from '../interceptor/interceptor'

const MyAlbum = () => {
  const { user }: { user: User | null } = useAppSelector((state) => state.auth)
  const [indexNumber, setIndexNumber] = useState<number>(-1)
  const openModal = (i: number) => {
    setIndexNumber(i)
  }

  const deleteSong = async (id: string | undefined) => {
    if (id) {
      await axiosInstance.delete(`${Api}/deleteSong/${id}`)
    }
  }
  return (
    <div className="w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen ">
      <div className="bg-[#121212] rounded-md p-2 mt-2 sm:mb-16 relative">
        <div className="mb-7">
          <div className="flex flex-wrap items-center justify-between">
            <SectionTitle text="My Album" />
          </div>
          <div className="flex flex-wrap gap-10 p-5 justify-start items-center w-full">
            {
              user?.albumCreation.length && user?.albumCreation.map((album: AlbumCreation, index: number) => {
                return (
                  <div key={album?._id} className='p-5 cursor-pointer w-[350px] h-fit border'>
                    {album?.albumImage?.url && <img onClick={() => openModal(index)} src={album?.albumImage?.url} className='w-[350px] h-[350px] object-cover' alt="" />}
                    <p className='py-4'> Album Name:  {album.albumName.charAt(0)?.toUpperCase() + album?.albumName.slice(1)?.toLowerCase()}</p>

                    {index == indexNumber ?
                      <div className='fixed flex justify-center items-center top-0 left-0 right-0 h-[100vh] bg-transparent'>

                        <div className='w-[400px] relative h-[350px] bg-black bg-opacity-50'>
                          <button onClick={() => setIndexNumber(-1)} className='absolute top-2 right-2 w-[30px] h-[30px] bg-red-500 text-center text-white rounded-full'>X</button>

                          <div className='flex flex-col h-[350px] justify-evenly overflow-y-auto pt-12 pb-4 px-4 gap-4 items-center'>
                            {
                              album?.uploadedSongs?.length && album?.uploadedSongs.map((song: Song) => {
                                return (
                                  <div
                                    // onClick={() => deleteSongs(song?._id)}
                                    key={song?._id}
                                    className="p-4 h-fit border w-full flex flex-wrap justify-start gap-8 "
                                  >
                                    <div className="w-fit flex items-center justify-start">
                                      <img
                                        className="object-cover w-[50px] h-[50px]"
                                        src="https://play-lh.googleusercontent.com/mOkjjo5Rzcpk7BsHrsLWnqVadUK1FlLd2-UlQvYkLL4E9A0LpyODNIQinXPfUMjUrbE"
                                        alt=""
                                      />
                                    </div>
                                    <div className="mt-2">
                                      <h6 className="text-sm font-medium line-clamp-1 opacity-50">
                                        Name: {song?.songName}
                                      </h6>
                                      <h6 className="text-sm text-left font-medium  opacity-50">
                                        {" "}
                                        Listen : {song?.listeningCount?.length}
                                      </h6>
                                    </div>
                                    <div className="mt-2">
                                      <button className='bg-red-500 text-white px-4 py-1 rounded-full' onClick={() => deleteSong(song?._id)} >Delete</button>
                                    </div>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div> : null
                    }

                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAlbum
