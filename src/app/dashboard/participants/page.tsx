'use client';

import Link from 'next/link';
import { Input } from '~/core/ui/input';
import { Button } from '~/core/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
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
import { useState } from 'react';

function page() {
  const [participants, setParticipants] = useState([
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      dateOfBirth: '1985-05-15',
      placeOfBirth: 'New York',
      residence: 'Los Angeles',
      address: '123 Main St, Los Angeles, CA 90001',
      nationality: 'American',
      taxCode: 'ABC123456',
      documentType: "Driver's License",
      documentNumber: 'A1234567',
      email: 'john.doe@example.com',
      phone: '+1 (555) 555-5555',
      pec: 'john.doe@pec.example.com',
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Smith',
      dateOfBirth: '1990-09-20',
      placeOfBirth: 'London',
      residence: 'New York',
      address: '456 Oak St, New York, NY 10001',
      nationality: 'British',
      taxCode: 'DEF987654',
      documentType: 'Passport',
      documentNumber: 'B987654321',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 555-5556',
      pec: 'jane.smith@pec.example.com',
    },
    {
      id: 3,
      name: 'Michael',
      surname: 'Johnson',
      dateOfBirth: '1992-03-01',
      placeOfBirth: 'Sydney',
      residence: 'Chicago',
      address: '789 Elm St, Chicago, IL 60601',
      nationality: 'Australian',
      taxCode: 'GHI456789',
      documentType: 'ID Card',
      documentNumber: 'C456789012',
      email: 'michael.johnson@example.com',
      phone: '+1 (555) 555-5557',
      pec: 'michael.johnson@pec.example.com',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddParticipantModalOpen, setIsAddParticipantModalOpen] =
    useState(false);
  const [newParticipant, setNewParticipant] = useState({
    name: '',
    surname: '',
    dateOfBirth: '',
    placeOfBirth: '',
    residence: '',
    address: '',
    nationality: '',
    taxCode: '',
    documentType: "Driver's License",
    documentNumber: '',
    email: '',
    phone: '',
    pec: '',
  });
  const filteredParticipants = participants.filter((participant) =>
    `${participant.name} ${participant.surname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );
  const handleAddParticipant = () => {
    setIsAddParticipantModalOpen(true);
  };
  const handleSaveParticipant = () => {
    setParticipants((prev) => [...prev, newParticipant]);
    setIsAddParticipantModalOpen(false);
    setNewParticipant({
      name: '',
      surname: '',
      dateOfBirth: '',
      placeOfBirth: '',
      residence: '',
      address: '',
      nationality: '',
      taxCode: '',
      documentType: "Driver's License",
      documentNumber: '',
      email: '',
      phone: '',
      pec: '',
    });
  };
  const handleDeleteParticipant = (id: number) => {
    setParticipants(
      participants.filter((participant) => participant.id !== id),
    );
  };
  const handleViewParticipant = (id: number) => {};
  return (
    <main className="flex-1 p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Participants</h1>
          <p className="text-muted-foreground">
            Manage your participants and enrollments.
          </p>
        </div>
        <div>
          <Button
            size="sm"
            className="rounded-md"
            onClick={handleAddParticipant}
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Participant
          </Button>
          <Dialog
            open={isAddParticipantModalOpen}
            onOpenChange={setIsAddParticipantModalOpen}
          >
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add Participant</DialogTitle>
                <DialogDescription>
                  Fill out the form to add a new participant.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newParticipant.name}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="surname">Surname</Label>
                    <Input
                      id="surname"
                      value={newParticipant.surname}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          surname: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={newParticipant.dateOfBirth}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          dateOfBirth: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="placeOfBirth">Place of Birth</Label>
                    <Input
                      id="placeOfBirth"
                      value={newParticipant.placeOfBirth}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          placeOfBirth: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="residence">Residence</Label>
                    <Input
                      id="residence"
                      value={newParticipant.residence}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          residence: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={newParticipant.address}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input
                      id="nationality"
                      value={newParticipant.nationality}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          nationality: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxCode">Tax Code</Label>
                    <Input
                      id="taxCode"
                      value={newParticipant.taxCode}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          taxCode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="documentType">Document Type</Label>
                    <Select
                      value={newParticipant.documentType}
                      onChange={(value: string) =>
                        setNewParticipant({
                          ...newParticipant,
                          documentType: value,
                        })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Driver's License">
                          Driver's License
                        </SelectItem>
                        <SelectItem value="ID Card">ID Card</SelectItem>
                        <SelectItem value="Passport">Passport</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="documentNumber">Document Number</Label>
                    <Input
                      id="documentNumber"
                      value={newParticipant.documentNumber}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          documentNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newParticipant.email}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={newParticipant.phone}
                      onChange={(e) =>
                        setNewParticipant({
                          ...newParticipant,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pec">PEC (Certified Email)</Label>
                  <Input
                    id="pec"
                    value={newParticipant.pec}
                    onChange={(e) =>
                      setNewParticipant({
                        ...newParticipant,
                        pec: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSaveParticipant}>
                  Save Participant
                </Button>
                <div>
                  <Button variant="outline">Cancel</Button>
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
              <TableHead>Surname</TableHead>
              <TableHead>Place of Birth</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredParticipants.map((participant) => (
              <TableRow key={participant.id}>
                <TableCell>{participant.name}</TableCell>
                <TableCell>{participant.surname}</TableCell>
                <TableCell>{participant.placeOfBirth}</TableCell>
                <TableCell>{participant.dateOfBirth}</TableCell>
                <TableCell>{participant.email}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-md"
                      onClick={() => handleViewParticipant(participant.id)}
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500"
                      onClick={() => handleDeleteParticipant(participant.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}

export default page;

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
