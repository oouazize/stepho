import Link from 'next/link';
import { Input } from '~/core/ui/input';
import { Button } from '~/core/ui/Button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '~/core/ui/Dialog';
import { Label } from '~/core/ui/Label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '~/core/ui/Select';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '~/core/ui/Table';

async function page() {
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p className="text-muted-foreground">
            Manage your courses and enrollments.
          </p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="rounded-md">
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogDescription>
                  Fill out the form to create a new course.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter course name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="entity">Entity</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select entity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acme-inc">Acme Inc</SelectItem>
                      <SelectItem value="global-solutions">
                        Global Solutions
                      </SelectItem>
                      <SelectItem value="tech-academy">Tech Academy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <div>
                  <Button type="submit">Save</Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Entity</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Introduction to Web Development</TableCell>
              <TableCell>Acme Inc</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                    prefetch={false}
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span>View</span>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Advanced JavaScript Techniques</TableCell>
              <TableCell>Global Solutions</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                    prefetch={false}
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span>View</span>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fundamentals of Data Science</TableCell>
              <TableCell>Tech Academy</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-500 hover:underline"
                    prefetch={false}
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span>View</span>
                  </Link>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <TrashIcon className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default page;

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}