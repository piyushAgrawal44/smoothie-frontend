import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import SectionTitle from "../components/SectionTitle"
import { User } from "../redux/reducers/authReducer"
import { useAppDispatch, useAppSelector } from "../redux/store"
import { loadUserApi, updateMyProfileApi } from "../redux/actions/authAction"
import axiosInstance from "../interceptor/interceptor"
import { createAlbumApi } from "../redux/actions/songAction"

export default function MyProfile() {
    const { user, followLoading }: { user: User | null; followLoading: boolean } = useAppSelector((state) => state.auth)
    const { albumLoading }: { albumLoading: boolean } = useAppSelector((state) => state.song)
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    // for album creation
    const [albumImage, setAlbumImage] = useState<string>("")
    const [albumName, setAlbumName] = useState<string>("")
    const [song, setSong] = useState<Array<{ name: string; base64Url: string }>>([])

    const [inputArray, setInputArray] = useState([
        <input key={0} onChange={(e) => selectSong(e, 0)} id="song" name="song" type="file" accept="audio/*" className="block" />
    ])

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setEmail(user.email)
        }
    }, [user])

    const updateProfileHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await dispatch(updateMyProfileApi(firstName, lastName, email))
        await dispatch(loadUserApi())
    }

    const selectImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.onload = async () => {
            if (reader.readyState === 2) {
                const file: string = reader?.result as string
                await axiosInstance.post(`/uploadProfilePicture`, {
                    file
                })
                await dispatch(loadUserApi())
            }
        }
        if (e.target.files) {
            reader.readAsDataURL(e?.target?.files[0])
        }
    }

    // for album creation
    const selectAlbumImage = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const reader = new FileReader()
            reader.onload = async () => {
                if (reader.readyState === 2) {
                    setAlbumImage(reader.result as string)
                }
            }
            reader.readAsDataURL(e?.target?.files[0])
        }
    }

    const selectSong = async (e: ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.files) {
            const reader = new FileReader()
            reader.onload = () => {
                if (e.target.files) {
                    if (reader.readyState === 2) {
                        const newSong: Array<{ name: string; base64Url: string }> = [...song]
                        newSong[index] = {
                            name: e.target.files[0].name,
                            base64Url: reader.result as string
                        }
                        setSong(newSong)
                    }
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const addInput = () => {
        const newInputArray = [
            ...inputArray,
            <input
                key={inputArray.length}
                onChange={(e) => selectSong(e, inputArray.length)}
                id="song"
                name="song"
                type="file"
                accept="audio/*"
                className="block"
            />
        ]
        setInputArray(newInputArray)
        setSong([...song])
        console.log(inputArray)
    }

    const removeInput = () => {
        if (inputArray.length > 1) {
            const newInputArray = inputArray.slice(0, -1)
            setInputArray(newInputArray)
        }
    }

    const createAlbumHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSong([...song])
        await dispatch(createAlbumApi(albumImage, albumName, song))
        // await dispatch()
    }

    const darkColors_2 = [
        "bg-[#a56752]",
        "bg-[#00432c]",
        "bg-[#e13300]",
        "bg-[#8400e7]",
        "bg-[#1e3264]",
        "bg-[#dc148c]",
        "bg-[#8e66ac]",
        "bg-[#b02897]",
        "bg-[#1e3264]",
        "bg-[#777777]"
    ]
    return (
        <div className="w-full bg-black text-gray-50 min-h-[calc(100vh-50px)] xm:min-h-screen ">
            <div className="bg-[#121212] rounded-md p-2 mt-2 sm:mb-16 relative">
                <div className="mb-7">
                    <div className="flex flex-wrap items-center justify-between">
                        <SectionTitle text="My Profile" />
                    </div>
                    <div className="grid grid-cols-2 gap-10 max-[900px]:grid-cols-1 place-content-center place-items-center p-5 justify-evenly w-full">
                        <div className="relative mx-auto w-[400px] max-sm:w-full">
                            {user?.profilePicture?.url ? (
                                <img
                                    className=" w-[250px] object-cover h-[250px] rounded-full"
                                    src={user?.profilePicture?.url}
                                    alt="user_image.png"
                                />
                            ) : (
                                <div
                                    className={` bg-opacity-50 flex justify-center ${darkColors_2[0]} items-center bg w-[250px] object-cover h-[250px] text-[22px] rounded-full`}
                                >
                                    {" "}
                                    {user?.firstName.charAt(0).toUpperCase()}{" "}
                                </div>
                            )}

                            <div className="absolute bottom-10 left-0">
                                <div className="border relative px-4 py-[0.05rem] rounded-full bg-whit bg-primary bg-white gap-2 w-fit text-center">
                                    <label htmlFor="fileInput" className="cursor-pointer text-black">
                                        Edit
                                    </label>
                                    <input
                                        onChange={(e) => selectImage(e)}
                                        id="fileInput"
                                        name="fileInput"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <form onSubmit={updateProfileHandler} className="flex flex-col w-[400px] max-sm:w-full gap-4">
                                <p className="text-white opacity-50">Profile Information</p>
                                <input
                                    className="h-[40px] w-full bg-transparent border px-4 border-white rounded-full"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    className="h-[40px] w-full bg-transparent border px-4 border-white rounded-full"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                <input
                                    className="h-[40px] w-full bg-transparent border px-4 border-white rounded-full"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="bg-white text-black px-4 py-[0.25rem] rounded-full">
                                    {" "}
                                    {followLoading ? "loading..." : "Update Profile"}
                                </button>
                            </form>
                        </div>
                        <div className="">
                            <form onSubmit={createAlbumHandler} className="flex flex-col w-[400px] max-sm:w-full gap-4">
                                <p className="text-white opacity-50">Create Album</p>
                                <div className="border relative px-4 py-[0.15rem] rounded-full bg-primary bg-white gap-2 w-full text-center">
                                    <label htmlFor="fileInputForAlbum" className="cursor-pointer text-black">
                                        Upload album image
                                    </label>
                                    <input
                                        onChange={(e) => selectAlbumImage(e)}
                                        id="fileInputForAlbum"
                                        name="fileInputForAlbum"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>
                                <input
                                    className="h-[40px] w-full bg-transparent border px-4 border-white rounded-full"
                                    type="text"
                                    placeholder="Enter your album name"
                                    value={albumName}
                                    onChange={(e) => setAlbumName(e.target.value)}
                                />
                                {inputArray.map((input, index) => (
                                    <div key={index}>{input}</div>
                                ))}
                                <div className="flex justify-center items-center gap-4 py-1">
                                    <p className="border rounded-full px-10 py-2" onClick={addInput}>
                                        Add Input
                                    </p>
                                    <p className="border rounded-full px-10 py-2" onClick={removeInput}>
                                        Remove Input
                                    </p>
                                </div>
                                <button className="bg-white text-black px-4 py-[0.25rem] rounded-full">
                                    {" "}
                                    {albumLoading ? "loading..." : "Create album"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
