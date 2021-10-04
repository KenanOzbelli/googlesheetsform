import Skeleton from 'react-loading-skeleton';

const SkeletonForm = () => (
    <div>
        <div className="card p-3 mb-5" style={{ boxShadow: "0px 1px 2px rgb(0 0 0/40%)", padding: "1rem", borderRadius: "0", border: '0', maxWidth: "1600px", margin: ".5rem auto" }} >
            <Skeleton className="p-4" />
            <table>
                <thead>
                    <tr>
                        <th>
                            <Skeleton className="p-1 mt-3" />
                        </th>
                        <th>
                            <Skeleton className="p-1 mt-3" />
                        </th>
                        <th>
                            <Skeleton className="p-1 mt-3" />
                        </th>
                        <th>
                            <Skeleton className="p-1 mt-3" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                        <td>
                            <Skeleton count={10} className="mt-2" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p className="text-muted text-center">&copy; KCC</p>
    </div>

)

export default SkeletonForm;