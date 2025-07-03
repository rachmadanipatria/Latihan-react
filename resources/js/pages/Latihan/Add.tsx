import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Terminal } from 'lucide-react';
import { constants } from 'node:buffer';
import { TriangleAlert } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Data',
        href: '/training/add-data',
    },
];

export default function Add_data() {

    const {data, setData, post, processing, errors} = useForm({
        nama:'',
        deskripsi:''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('Latihan-tambah'));
        //console.log(data);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Data" />
            <div className='w-8/12 p-4'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Display error */}

                    {Object.keys(errors).length > 0 &&(
                        <Alert>
                        <TriangleAlert />
                        <AlertTitle>Errors!</AlertTitle>
                        <AlertDescription>
                            <ul>
                                {Object.entries(errors).map(([key, message])=>(
                                    <li key={key}>{message as string}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                        </Alert>
                    )}

                    {/* {Object.keys(errors).length > 0 && (
                        <div className="text-red-500">
                            {Object.values(errors).map((error, index) => (
                            <Alert>
                             <TriangleAlert /> <div key={index}>{error}</div>
                            </Alert>
                            ))}
                        </div>
                    )} */}

                    <div>
                        <Label htmlFor='Nama'>Nama</Label>
                        <Input className='bg-gray-200' placeholder='Nama' value={data.nama} onChange={(e) => setData('nama', e.target.value)}></Input>
                    </div>
                    <div>
                        <Label htmlFor='Deskripsi'>Deskripsi</Label>
                        <Textarea className='bg-gray-200' placeholder='Deskripsi' value={data.deskripsi} onChange={(e) => setData('deskripsi', e.target.value)}></Textarea>                        
                    </div>
                    <div>
                        <Button>Tambah</Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
